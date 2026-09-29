import { useState } from 'react'
import { Mail, Github, Linkedin, FileText } from 'lucide-react'
import { profile } from '../data/profile.js'
import { Reveal } from '../hooks.jsx'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  // No backend: this opens the visitor's email client with a pre-filled message.
  const submit = (e) => {
    e.preventDefault()
    const body = `${f.message}\n\n— ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(body)}`
  }
  return (
    <Reveal as="section" id="contact" className="container sec">
      <p className="eyebrow">09 · Contact</p><h2>Let’s talk</h2>
      <div className="contact">
        <ul className="clinks">
          <li><a href={`mailto:${profile.email}`}><Mail size={16} />{profile.email}</a></li>
          <li><a href={profile.github} target="_blank" rel="noopener"><Github size={16} />GitHub</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener"><Linkedin size={16} />LinkedIn</a></li>
          <li><a href={profile.resume} target="_blank" rel="noopener"><FileText size={16} />Resume</a></li>
        </ul>
        <form onSubmit={submit}>
          <label>Name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
          <label>Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
          <label>Message<textarea required rows="4" value={f.message} onChange={set('message')} /></label>
          <button className="btn primary" type="submit">Compose email</button>
          <small className="muted">Opens your email app with the message pre-filled.</small>
        </form>
      </div>
    </Reveal>
  )
}
