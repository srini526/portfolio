import { useEffect, useState } from 'react'
import { Command, Menu, X, FileText } from 'lucide-react'
import { profile } from '../data/profile.js'
const links = [['Home','home'],['About','about'],['Projects','projects'],['Skills','skills'],['Journey','journey'],['Contact','contact']]
export default function Navbar({ onCommand }) {
  const [open, setOpen] = useState(false), [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    links.forEach(([, id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  const mac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#home">SRINIVAS</a>
        <ul className="nav-links">{links.map(([l, id]) => <li key={id}><a href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined}>{l}</a></li>)}</ul>
        <button className="kbd" onClick={onCommand} aria-label="Open command center"><Command size={14} /><span className="kbd-t">{mac ? '⌘K' : 'Ctrl K'}</span></button>
        <a className="nav-resume" href={profile.resume} target="_blank" rel="noopener"><FileText size={14} /><span>Resume</span></a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X size={18} /> : <Menu size={18} />}</button>
      </nav>
      {open && (
        <ul className="mobile-menu">{links.map(([l, id]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{l}</a></li>)}</ul>
      )}
    </header>
  )
}
