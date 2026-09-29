import { skills } from '../data/skills.js'
import { Reveal } from '../hooks.jsx'
export default function Skills() {
  return (
    <Reveal as="section" id="skills" className="container sec">
      <p className="eyebrow">05 · Skills</p><h2>Technologies I use</h2>
      <div className="sk">{skills.map(([g, items]) => <div key={g} className="skc glow"><h3>{g}</h3><ul className="tags">{items.map((s) => <li key={s}>{s}</li>)}</ul></div>)}</div>
    </Reveal>
  )
}
