import { Link } from 'react-router-dom'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile.js'
import { Magnetic } from '../hooks.jsx'
export default function Hero() {
  const lines = ['Srinivas', 'Kanagare J']
  return (
    <section id="home" className="hero container">
      <div className="hero-l">
        <p className="eyebrow"><i />AI / ML Developer</p>
        <h1 aria-label={profile.name}>{lines.map((w, i) => <span className="mask" key={w} aria-hidden="true"><span className="rise" style={{ '--i': i }}>{w}</span></span>)}</h1>
        <p className="tag">{profile.headline[0]} <em>{profile.headline[1]}</em></p>
        <p className="lead">{profile.intro}</p>
        <div className="cta">
          <Magnetic><Link className="btn pop" to="/#work" data-cursor="Go">View work <ArrowUpRight size={16} /></Link></Magnetic>
          <Magnetic><a className="btn ghost" href={profile.github} target="_blank" rel="noopener"><Github size={15} />GitHub</a></Magnetic>
          <Magnetic><a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener"><Linkedin size={15} />LinkedIn</a></Magnetic>
        </div>
      </div>
      <div className="hero-r">
        <div className="portrait" data-parallax=".05"><img src="/images/srini.jpg" width="600" height="900" alt={`Portrait of ${profile.name}`} fetchpriority="high" /></div>
        <svg className="badge" viewBox="0 0 120 120" aria-hidden="true">
          <defs><path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
          <text><textPath href="#circ" textLength="272">RAG · LLM · GenAI · ML · RAG · LLM · GenAI · ML ·</textPath></text><circle cx="60" cy="60" r="5" />
        </svg>
      </div>
    </section>
  )
}