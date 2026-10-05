import { useEffect, useRef, useState } from 'react'
import { useFine, useReduced } from '../hooks.jsx'
export default function Cursor() {
  const fine = useFine(), reduce = useReduced()
  const dot = useRef(null), ring = useRef(null), [label, setLabel] = useState('')
  useEffect(() => {
    if (!fine || reduce) return
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0
    const mv = (e) => {
      x = e.clientX; y = e.clientY
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`
      const t = e.target.closest ? e.target.closest('[data-cursor]') : null
      setLabel(t ? t.dataset.cursor : '')
      ring.current && ring.current.classList.toggle('hot', Boolean(e.target.closest && e.target.closest('a,button,[data-cursor]')))
    }
    const loop = () => { rx += (x - rx) * 0.16; ry += (y - ry) * 0.16; if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`; raf = requestAnimationFrame(loop) }
    window.addEventListener('mousemove', mv); raf = requestAnimationFrame(loop)
    document.documentElement.classList.add('has-cursor')
    return () => { window.removeEventListener('mousemove', mv); cancelAnimationFrame(raf); document.documentElement.classList.remove('has-cursor') }
  }, [fine, reduce])
  if (!fine || reduce) return null
  return (<><div ref={dot} className="c-dot" aria-hidden="true" /><div ref={ring} className="c-ring" aria-hidden="true"><span>{label}</span></div></>)
}