import { Github as Gh, Download, FileText } from 'lucide-react'
import { profile } from '../data/profile.js'
import { Reveal } from '../hooks.jsx'
export default function GitHub() {
  return (
    <Reveal as="section" id="github" className="container sec">
      <p className="eyebrow">08 · GitHub & resume</p>
      <div className="gh">
        <div><h3>Code lives on GitHub</h3><p>Browse the RAG teaching assistant and other repositories.</p></div>
        <div className="cta">
          <a className="btn primary" href={profile.github} target="_blank" rel="noopener"><Gh size={15} />View GitHub Profile</a>
          <a className="btn ghost" href={profile.resume} target="_blank" rel="noopener"><FileText size={15} />View Resume</a>
          <a className="btn ghost" href={profile.resume} download><Download size={15} />Download Resume</a>
        </div>
      </div>
    </Reveal>
  )
}
