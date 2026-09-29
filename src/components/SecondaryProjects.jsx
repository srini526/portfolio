import { secondary } from '../data/projects.js'
import { Reveal } from '../hooks.jsx'
export default function SecondaryProjects() {
  return (
    <Reveal as="section" className="container sec">
      <p className="eyebrow">04 · More work</p><h2>Additional projects</h2>
      <div className="sgrid">{secondary.map((p) => <article key={p.title} className="scard glow"><span className="tag">{p.tag}</span><h3>{p.title}</h3><p>{p.desc}</p></article>)}</div>
    </Reveal>
  )
}
