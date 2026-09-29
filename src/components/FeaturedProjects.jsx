import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { rag, brain } from '../data/projects.js'
import { profile } from '../data/profile.js'
import { Reveal, useReduced } from '../hooks.jsx'
import RAGPipeline from './RAGPipeline.jsx'
const Tags = ({ items }) => <ul className="tags">{items.map((t) => <li key={t}>{t}</li>)}</ul>
const Points = ({ items }) => <ul className="pts">{items.map((t) => <li key={t}>{t}</li>)}</ul>
function CountUp({ to, decimals = 2, suffix = '%' }) {
  const ref = useRef(null), reduce = useReduced(), [v, setV] = useState(reduce ? to : 0)
  useEffect(() => {
    if (reduce) { setV(to); return }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect(); const t0 = performance.now()
      const tick = (t) => { const k = Math.min((t - t0) / 1400, 1); setV(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick) }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(ref.current); return () => io.disconnect()
  }, [to, reduce])
  return <strong ref={ref}>{v.toFixed(decimals)}{suffix}</strong>
}
export default function FeaturedProjects({ onCase }) {
  return (
    <>
      <Reveal as="section" id="projects" className="container sec">
        <p className="eyebrow">02 · Featured work</p><h2>Two projects, end to end</h2>
        <div className="feat">
          <article className="fcard glow">
            <div className="fleft">
              <div className="fvis rag-vis" aria-label="Query flow: user query, retrieval, relevant context, LLM, answer">
                {rag.query.map(([q, sub], i) => <div key={q} className="qstep" style={{ '--i': i }}><strong>{q}</strong><span>{sub}</span></div>)}
              </div>
            </div>
            <div className="fbody">
              <p className="cat">{rag.category}</p><h3>{rag.title}</h3><p>{rag.desc}</p><Points items={rag.points} /><Tags items={rag.tech} />
              <div className="cta">
                <button className="btn primary" onClick={(e) => onCase(e)}>View Case Study <ArrowRight size={15} /></button>
                <a className="btn ghost" href={profile.ragRepo} target="_blank" rel="noopener"><Github size={15} />GitHub</a>
              </div>
            </div>
          </article>
          <article className="fcard glow">
            <div className="fleft">
              <div className="fvis mri">
                {brain.samples.map(([l, src]) => (
                  <figure key={l}><div><img src={src} alt={`${l} MRI sample`} loading="lazy" /></div><figcaption>{l}</figcaption></figure>
                ))}
              </div>
              <div className="acc"><CountUp to={88.75} /><span>accuracy</span><em>InceptionV3 → Classifier</em></div>
            </div>
            <div className="fbody">
              <p className="cat">{brain.category}</p><h3>{brain.title}</h3><p>{brain.desc}</p><Points items={brain.points} /><Tags items={[...brain.tech, brain.presented]} />
              <div className="cta"><a className="btn primary" href={profile.kaggle} target="_blank" rel="noopener">View on Kaggle <ExternalLink size={15} /></a></div>
            </div>
          </article>
        </div>
      </Reveal>
      <Reveal as="section" id="architecture" className="container sec">
        <p className="eyebrow">03 · RAG architecture</p><h2>How the teaching assistant works</h2>
        <RAGPipeline />
      </Reveal>
    </>
  )
}
