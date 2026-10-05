import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import About from '../components/About.jsx'
import Terminal from '../components/Terminal.jsx'
import Work from '../components/Work.jsx'
import Ask from '../components/Ask.jsx'
import Skills from '../components/Skills.jsx'
import Journey from '../components/Journey.jsx'
import Others from '../components/Others.jsx'
import Contact from '../components/Contact.jsx'
export default function Home() {
  const openCmd = () => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))
  return (<><Hero /><Marquee /><About /><Terminal onOpen={openCmd} /><Work /><Ask /><Skills /><Others /><Journey /><Contact /></>)
}