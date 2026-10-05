import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Command, Menu, X, Sun, Moon } from 'lucide-react'
import { profile } from '../data/profile.js'
const links = [['Work', 'work'], ['About', 'about'], ['Ask', 'ask'], ['Skills', 'skills'], ['Journey', 'journey'], ['Contact', 'contact']]
export default function Navbar({ onCommand, theme, onTheme }) {
  const [open, setOpen] = useState(false), [solid, setSolid] = useState(false)
  useEffect(() => { const f = () => setSolid(window.scrollY > 20); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  const mac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)
  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <Link className="brand" to="/" onClick={() => setOpen(false)}>{profile.name.split(' ')[0]}<span>.</span></Link>
      <nav aria-label="Main"><ul className="nav-links">{links.map(([l, id]) => <li key={id}><Link to={`/#${id}`}>{l}</Link></li>)}</ul></nav>
      <div className="nav-r">
        <button className="icon-btn kbd" onClick={onCommand} aria-label="Open command menu"><Command size={14} /><span className="kbd-t">{mac ? '⌘K' : 'Ctrl K'}</span></button>
        <button className="icon-btn" onClick={onTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button>
        <a className="btn pop sm nav-resume" href={profile.resume} target="_blank" rel="noopener">Resume</a>
        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
      {open && <ul className="mobile-menu">{links.map(([l, id]) => <li key={id}><Link to={`/#${id}`} onClick={() => setOpen(false)}>{l}</Link></li>)}<li><a href={profile.resume} target="_blank" rel="noopener">Resume</a></li></ul>}
    </header>
  )
}