import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile.js'
import { Reveal } from '../hooks.jsx'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  // No backend: opens the visitor's email app with the message pre-filled.
  const submit = (e) => { e.preventDefault(); window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`)}` }
  return (
    <section id="contact" className="container sec">
      <p className="eyebrow"><i />Contact</p>
      <h2 className="huge">Let’s build <em>something.</em></h2>
      <a className="mail" href={`mailto:${profile.email}`} data-cursor="Email">{profile.email} <ArrowUpRight size={28} /></a>
      <div className="contact">
        <ul className="clinks"><li><a href={profile.github} target="_blank" rel="noopener">GitHub ↗</a></li><li><a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a></li><li><a href={profile.resume} target="_blank" rel="noopener">Resume ↗</a></li></ul>
        <Reveal as="form" onSubmit={submit} className="cform">
          <label>Name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
          <label>Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
          <label>Message<textarea required rows="4" value={f.message} onChange={set('message')} /></label>
          <button className="btn pop" type="submit">Compose email</button><small className="muted">Opens your email app with the message pre-filled.</small>
        </Reveal>
      </div>
    </section>
  )
}