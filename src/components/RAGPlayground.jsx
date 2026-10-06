import { useEffect, useRef, useState } from 'react'
import { Send, Square } from 'lucide-react'
import { useReduced } from '../hooks.jsx'
import { retrieve , fallback } from '../data/playground.js'
import { useNavigate } from 'react-router-dom'

const STAGES = ['Embed', 'Retrieve', 'Rank', 'Generate']
const MAX_Q = 200
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const labels = (hits) => [...new Set(hits.map((h) => h.src))]

// Reads the NDJSON stream from /api/chat and calls onEvent(event) for every line.
async function streamChat(question, signal, onEvent) {
  const r = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question }), signal })
  if (!r.ok || !r.body || !(r.headers.get('content-type') || '').includes('ndjson')) throw Object.assign(new Error('bad_response'), { status: r.status })
  const reader = r.body.getReader(), dec = new TextDecoder()
  let buf = ''
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    buf += dec.decode(value, { stream: true })
    const lines = buf.split('\n'); buf = lines.pop()
    for (const l of lines) if (l.trim()) await onEvent(JSON.parse(l))
  }
}

export default function RAGPlayground() {
  const reduce = useReduced()
  const nav = useNavigate()
  const [q, setQ] = useState('')
  const [live, setLive] = useState({ on: false, model: '' })
  const [turn, setTurn] = useState(null) // { question, stage, sources, answer, done, streaming, note }
  const run = useRef(0), abort = useRef(null), log = useRef(null)

  // Ask the server whether the live LLM is configured (the API key itself never reaches the browser).
  useEffect(() => {
    const ac = new AbortController()
    fetch('/api/chat', { signal: ac.signal })
      .then((r) => (r.ok && (r.headers.get('content-type') || '').includes('json') ? r.json() : null))
      .then((j) => j && j.live && setLive({ on: true, model: j.model }))
      .catch(() => {})
    return () => { ac.abort(); run.current = -1; abort.current?.abort() }
  }, [])
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight }, [turn?.answer, turn?.stage])

  // Offline demo: keyword retrieval over the resume text, no network.
  const demo = async (text, alive) => {
    const hits = retrieve(text)
    const full = hits.length ? hits.map((h) => h.text).join('\n\n') : fallback
    const patch = (p) => alive() && setTurn((t) => ({ ...t, ...p }))
    if (reduce) { patch({ stage: 4, sources: labels(hits), answer: full, done: true, streaming: false }); return }
    for (let s = 0; s < 4; s++) {
      if (!alive()) return
      patch({ stage: s, sources: s >= 1 ? labels(hits) : [] })
      await sleep(s === 3 ? 250 : 480)
    }
    let out = ''
    for (const part of full.split(/(\s+)/)) {
      if (!alive()) return
      out += part; patch({ answer: out })
      if (part.trim()) await sleep(24)
    }
    patch({ stage: 4, done: true, streaming: false })
  }

  const ask = async (question) => {
    const text = question.trim().slice(0, MAX_Q)
    if (!text) return
    abort.current?.abort()
    const ac = new AbortController(); abort.current = ac
    const id = ++run.current, alive = () => run.current === id
    const patch = (p) => alive() && setTurn((t) => ({ ...t, ...p }))
    setQ('')
    setTurn({ question: text, stage: 0, sources: [], answer: '', done: false, streaming: true, note: '' })
    if (!live.on) { await demo(text, alive); return }
    let got = false
    try {
      await streamChat(text, ac.signal, async (e) => {
        if (!alive()) return
        if (e.type === 'sources') {
          patch({ stage: 1, sources: e.sources }); await sleep(reduce ? 0 : 380)
          patch({ stage: 2 }); await sleep(reduce ? 0 : 380)
        } else if (e.type === 'token') {
          got = true; setTurn((t) => ({ ...t, stage: 3, answer: t.answer + e.t }))
        } else if (e.type === 'error') throw new Error('upstream')
      })
      patch({ stage: 4, done: true, streaming: false })
    } catch (err) {
      if (!alive() || err.name === 'AbortError') return
      if (err.status === 429) { patch({ stage: 4, answer: 'Too many questions in a short time. Please try again in a minute.', done: true, streaming: false }); return }
      if (got) { patch({ stage: 4, done: true, streaming: false, note: 'Connection interrupted.' }); return }
      setLive({ on: false, model: '' }) // live backend unavailable: fall back to the offline demo
      patch({ note: 'Live model unavailable, showing offline demo.' })
      await demo(text, alive)
    }
  }

  const stop = () => { run.current++; abort.current?.abort(); setTurn((t) => t && { ...t, stage: 4, done: true, streaming: false }) }
  const stage = turn ? turn.stage : -1
  const streaming = Boolean(turn && turn.streaming)
  return (
    <section className="rag-pg" aria-label="Live RAG playground">
      <header className="pg-head">
        <span className={`dot ${live.on ? '' : 'off'}`} /> rag-playground
        <em title={live.on ? "Live: answers generated by an LLM on Groq, grounded in Srinivas's profile" : "Demo: keyword retrieval over Srinivas's profile, no LLM call"}>{live.on ? `live · ${live.model.split('/').pop()}` : 'demo mode'}</em>
      </header>
      <ol className="pg-stages" aria-label="Pipeline stages">
        {STAGES.map((s, i) => <li key={s} className={i < stage ? 'done' : i === stage ? 'active' : ''}>{s}</li>)}
      </ol>
      <div className="pg-log" ref={log} aria-busy={streaming}>
        <p className="msg bot"><span>Ask about Srinivas's projects, skills, education or internship. Answers are retrieved from his resume.</span></p>
        {turn && (
          <>
            <p className="msg me"><span>{turn.question}</span></p>
            <div className="msg bot">
              <p>{turn.answer || <span className="typing">retrieving…</span>}{streaming && turn.answer && <i className="caret" />}</p>
              {turn.note && <p className="note">{turn.note}</p>}
              {turn.done && /^I (couldn.t|could not|cannot|can.t) find/i.test(turn.answer) && (
                <button type="button" className="btn ghost sm nf-btn" onClick={() => nav('/#contact')}>Go to the contact form</button>
              )}
              {turn.stage >= 1 && turn.sources.length > 0 && (
                <ul className="srcs" aria-label="Retrieved sources">
                  {turn.sources.map((s, i) => <li key={s} style={{ '--k': i }}>{s}</li>)}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
      <p className="sr" aria-live="polite">{turn && turn.done ? turn.answer : ''}</p>
      {/* <ul className="pg-chips">
        {suggestions.map((s) => <li key={s}><button type="button" onClick={() => ask(s)}>{s}</button></li>)}
      </ul> */}
      <form className="pg-form" onSubmit={(e) => { e.preventDefault(); streaming ? stop() : ask(q) }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ask about Srinivas…" aria-label="Ask a question about Srinivas" maxLength={MAX_Q} />
        <button className="btn primary" type="submit" aria-label={streaming ? 'Stop answer' : 'Send question'}>{streaming ? <Square size={14} /> : <Send size={15} />}</button>
      </form>
    </section>
  )
}