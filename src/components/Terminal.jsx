import { Command } from 'lucide-react'
import { Reveal } from '../hooks.jsx'
const lines = [
  ['whoami', 'Srinivas Kanagare J'],
  ['focus', 'RAG · LLMs · Machine Learning · Full-Stack'],
  ['stack', 'Python · Flask · React · Docker · AWS'],
  ['projects', 'RAG Assistant · Brain Tumor Detection · Land Registry · Mock Tests · Mathogic'],
]
export default function Terminal({ onOpen }) {
  const mac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)
  return (
    <Reveal as="section" className="container sec" aria-label="System profile">
      <div className="term">
        <div className="term-bar"><i className="d r" /><i className="d y" /><i className="d g" /><span>srinivas@portfolio:~</span><em>{mac ? '⌘ + K' : 'CTRL + K'}</em></div>
        <div className="term-body">
          <div>
            <p className="eyebrow">System profile</p>
            <h2>A portfolio that behaves like a small product.</h2>
            <p className="muted">Use the command menu to jump around the site, explore work and open the resume.</p>
            <button className="btn ghost tbtn" onClick={onOpen}><Command size={15} />Open command menu <kbd>{mac ? '⌘K' : 'Ctrl K'}</kbd></button>
          </div>
          <div className="term-code" role="group" aria-label="Terminal summary of Srinivas's profile">
            {lines.map(([c, o], i) => {
              const base = i * 1.7, dur = c.length * 0.07
              return (
                <div key={c} className="tline">
                  <div className="tcmd"><b>$</b><span style={{ '--n': c.length, '--d': `${base}s`, '--t': `${dur}s` }}>{c}</span></div>
                  <div className="out" style={{ '--d': `${base + dur + 0.2}s` }}>{o}</div>
                </div>
              )
            })}
            <div className="tcmd"><b>$</b><i className="cur" /></div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
