import { profile } from '../data/profile.js'
import { Reveal } from '../hooks.jsx'
export default function About() {
  const words = profile.about[0].split(' ')
  return (
    <section id="about" className="container sec">
      <p className="eyebrow"><i />About</p>
      <p className="big words" data-words style={{ '--n': words.length }}>{words.map((w, i) => <span className="w" key={i} style={{ '--i': i }}>{w} </span>)}</p>
      <Reveal as="p" className="about2">{profile.about[1]}</Reveal>
    </section>
  )
}