import { profile } from '../data/profile.js'
export default function Footer() {
  return (
    <footer className="footer container">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="foot-links"><a href={profile.github} target="_blank" rel="noopener">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a><a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top ↑</a></span>
    </footer>
  )
}