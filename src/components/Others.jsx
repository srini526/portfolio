import { useState } from 'react'
import { secondary } from '../data/projects.js'
import { Reveal } from '../hooks.jsx'
const TABS = ['All', 'AI', 'Full-Stack', 'Android', 'DevOps']
const inTab = (p, t) => t === 'All' || p.cats.includes(t)
export default function Others() {
  const [tab, setTab] = useState('All')
  const list = secondary.filter((p) => inTab(p, tab))
  return (
    <section id="more" className="container sec">
      <p className="eyebrow"><i />More work</p><h2>Other <em>projects.</em></h2>
      <div className="ftabs" role="group" aria-label="Filter projects by category">
        {TABS.map((t) => (
          <button key={t} type="button" className={`ftab ${tab === t ? 'on' : ''}`} aria-pressed={tab === t} onClick={() => setTab(t)}>
            {t}<sup>{secondary.filter((p) => inTab(p, t)).length}</sup>
          </button>
        ))}
      </div>
      <p className="sr" aria-live="polite">Showing {list.length} {list.length === 1 ? 'project' : 'projects'}</p>
      <Reveal>
        <ul className="pgrid" key={tab}>
          {list.map((p, i) => (
            <li key={p.title} className="pcard" style={{ '--i': i }}>
              <div className="ptop"><span className="pnum">{String(i + 1).padStart(2, '0')}</span>{p.status && <span className="status">{p.status}</span>}</div>
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              {p.links.length > 0 && <div className="plinks">{p.links.map(([label, url]) => <a key={url} className="repo" href={url} target="_blank" rel="noopener">{label} ↗</a>)}</div>}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}