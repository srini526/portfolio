import { profile } from '../data/profile.js'
import { Reveal } from '../hooks.jsx'
export default function About() {
  return (
    <Reveal as="section" id="about" className="container sec">
      <p className="eyebrow">01 · About</p><h2>Who is Srinivas?</h2>
      <div className="about">{profile.about.map((t) => <p key={t}>{t}</p>)}</div>
    </Reveal>
  )
}
