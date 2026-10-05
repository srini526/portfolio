import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import CommandCenter from './components/CommandCenter.jsx'
import Cursor from './components/Cursor.jsx'
import Footer from './components/Footer.jsx'
import NotFound from './components/NotFound.jsx'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import { profile } from './data/profile.js'
import { useReduced, useScrollFx } from './hooks.jsx'

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('theme', theme) } catch { /* ignore */ } }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

export default function App() {
  const [cmd, setCmd] = useState(false)
  const [theme, toggle] = useTheme()
  const loc = useLocation(), nav = useNavigate(), reduce = useReduced()
  useScrollFx(loc.pathname)
  useEffect(() => {
    const h = (e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setCmd((v) => !v) } }
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h)
  }, [])
  useEffect(() => { // route change: scroll to the #section, or to the top
    if (loc.hash) { const t = setTimeout(() => document.getElementById(loc.hash.slice(1))?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }), 80); return () => clearTimeout(t) }
    window.scrollTo(0, 0)
  }, [loc.key]) // eslint-disable-line react-hooks/exhaustive-deps
  const ext = (u) => () => window.open(u, '_blank', 'noopener')
  const commands = [
    { label: 'Go to Home', hint: 'Page', run: () => nav('/') }, { label: 'View Featured Work', hint: 'Section', run: () => nav('/#work') },
    { label: 'Open RAG Case Study', hint: 'Page', run: () => nav('/projects/rag-assistant') }, { label: 'Open Brain Tumor Project', hint: 'Page', run: () => nav('/projects/brain-tumor') },
    { label: 'Ask the Portfolio (live chat)', hint: 'Section', run: () => nav('/#ask') }, { label: 'View Skills', hint: 'Section', run: () => nav('/#skills') },
    { label: 'View Journey & Education', hint: 'Section', run: () => nav('/#journey') }, { label: 'View GitHub', hint: 'External', run: ext(profile.github) },
    { label: 'View Resume', hint: 'PDF', run: ext(profile.resume) }, { label: 'Contact Srinivas', hint: 'Section', run: () => nav('/#contact') },
    { label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`, hint: 'Theme', run: toggle },
  ]
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <Cursor />
      <Navbar onCommand={() => setCmd(true)} theme={theme} onTheme={toggle} />
      <main key={loc.pathname} className="page">
        <Routes><Route path="/" element={<Home />} /><Route path="/projects/:slug" element={<Project />} /><Route path="*" element={<NotFound />} /></Routes>
      </main>
      <Footer />
      <CommandCenter open={cmd} onClose={() => setCmd(false)} commands={commands} />
    </>
  )
}