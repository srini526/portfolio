import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { rag, brain } from '../data/projects.js'
import { Reveal } from '../hooks.jsx'
const Tags = ({ items }) => <ul className="tags">{items.map((t) => <li key={t}>{t}</li>)}</ul>
function Row({ n, p, vis }) {
  return (
    <Reveal as="article" className="work">
      <Link to={`/projects/${p.slug}`} className="work-link" data-cursor="View" aria-label={`${p.title}: open case study`}>
        <span className="num">{n}</span>
        <div className="work-main"><p className="cat">{p.category}</p><h3>{p.title}</h3><p className="muted">{p.desc}</p><Tags items={p.tech} /></div>
        <div className="work-vis">{vis}</div>
        <span className="arrow"><ArrowUpRight size={22} /></span>
      </Link>
    </Reveal>
  )
}
export default function Work() {
  return (
    <section id="work" className="container sec">
      <p className="eyebrow"><i />Featured work</p><h2>Two projects, <em>end to end.</em></h2>
      <Row n="01" p={rag} vis={<ol className="flow">{rag.query.map(([q], i) => <li key={q} style={{ '--i': i }}>{q}</li>)}</ol>} />
      <Row n="02" p={brain} vis={<div className="thumbs">{brain.samples.map(([l, s]) => <figure key={l}><div><img src={s} alt={`${l} MRI sample`} loading="lazy" /></div><figcaption>{l}</figcaption></figure>)}</div>} />
    </section>
  )
}