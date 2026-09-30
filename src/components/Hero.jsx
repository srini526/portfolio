import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'
import RAGPlayground from './RAGPlayground.jsx'
export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-l">
        <p className="name">{profile.name}</p>
        <p className="eyebrow">AI / ML · RAG · LLM · GenAI</p>
        <h1>{profile.headline[0]} <span className="grad">{profile.headline[1]}</span></h1>
        <p className="lead">{profile.intro}</p>
        <div className="cta">
          <a className="btn primary" href="#projects">View Featured Work <ArrowRight size={16} /></a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noopener"><Github size={15} />GitHub</a>
          <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener"><Linkedin size={15} />LinkedIn</a>
          <a className="btn ghost" href="#contact"><Mail size={15} />Contact</a>
        </div>
        <ul className="proof">{profile.cards.map(([a, b]) => <li key={a} className="glow"><strong>{a}</strong><span>{b}</span></li>)}</ul>
      </div>
      <div className="hero-r">
        <figure className="portrait">
          <img src="/images/srini.jpg" width="600" height="900" alt="Portrait of Srinivas Kanagare J" />
          <figcaption><strong>{profile.name}</strong><span>“Srini” · AI / ML Developer</span></figcaption>
        </figure>
        <div className="map-card"><RAGPlayground /></div>
      </div>
    </section>
  )
}
