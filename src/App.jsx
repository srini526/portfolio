import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import CommandCenter from './components/CommandCenter.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import RAGCaseStudy from './components/RAGCaseStudy.jsx'
import SecondaryProjects from './components/SecondaryProjects.jsx'
import Terminal from './components/Terminal.jsx'
import Skills from './components/Skills.jsx'
import Journey from './components/Journey.jsx'
import GitHub from './components/GitHub.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { profile } from './data/profile.js'
import { useReduced } from './hooks.jsx'
export default function App() {
  const [cmd, setCmd] = useState(false), [cs, setCs] = useState(false)
  const reduce = useReduced()
  useEffect(() => {
    const h = (e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setCmd((v) => !v) } }
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h)
  }, [])
  const bar = useRef(null)
  useEffect(() => {
    const sc = () => { const h = document.documentElement; bar.current && bar.current.style.setProperty('--p', h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) }
    const mv = (e) => { const t = e.target.closest && e.target.closest('.glow'); if (t) { const r = t.getBoundingClientRect(); t.style.setProperty('--mx', e.clientX - r.left + 'px'); t.style.setProperty('--my', e.clientY - r.top + 'px') } }
    window.addEventListener('scroll', sc, { passive: true }); document.addEventListener('mousemove', mv)
    return () => { window.removeEventListener('scroll', sc); document.removeEventListener('mousemove', mv) }
  }, [])
  const go = (id) => () => document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  const ext = (u) => () => window.open(u, '_blank', 'noopener')
  const commands = [
    { label: 'Go to Home', hint: 'Section', run: go('home') }, { label: 'Go to About', hint: 'Section', run: go('about') },
    { label: 'View Featured Work', hint: 'Section', run: go('projects') }, { label: 'View RAG Architecture', hint: 'Section', run: go('architecture') },
    { label: 'View Skills', hint: 'Section', run: go('skills') }, { label: 'View Journey', hint: 'Section', run: go('journey') },
    { label: 'View Education', hint: 'Section', run: go('education') }, { label: 'View GitHub', hint: 'External', run: ext(profile.github) },
    { label: 'View Resume', hint: 'PDF', run: ext(profile.resume) }, { label: 'Contact Srinivas', hint: 'Section', run: go('contact') },
  ]
  return (
    <>
      <div className="progress" ref={bar} aria-hidden="true" />
      <Navbar onCommand={() => setCmd(true)} />
      <main>
        <Hero /><About /><Terminal onOpen={() => setCmd(true)} /><FeaturedProjects onCase={() => setCs(true)} /><SecondaryProjects />
        <Skills /><Journey /><GitHub /><Contact />
      </main>
      <Footer />
      <CommandCenter open={cmd} onClose={() => setCmd(false)} commands={commands} />
      <RAGCaseStudy open={cs} onClose={() => setCs(false)} />
    </>
  )
}
