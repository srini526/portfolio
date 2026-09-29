import { useEffect, useMemo, useState } from 'react'
import { Search, CornerDownLeft } from 'lucide-react'
import Modal from './Modal.jsx'
export default function CommandCenter({ open, onClose, commands }) {
  const [q, setQ] = useState(''); const [i, setI] = useState(0)
  useEffect(() => { if (open) { setQ(''); setI(0) } }, [open])
  const list = useMemo(() => commands.filter((c) => c.label.toLowerCase().includes(q.toLowerCase())), [q, commands])
  const run = (c) => { if (!c) return; onClose(); setTimeout(c.run, 60) }
  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setI((x) => (x + 1) % Math.max(list.length, 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setI((x) => (x - 1 + list.length) % Math.max(list.length, 1)) }
    else if (e.key === 'Enter') { e.preventDefault(); run(list[i]) }
  }
  return (
    <Modal open={open} onClose={onClose} label="Command center" className="cmd">
      <div className="cmd-input"><Search size={16} />
        <input value={q} onChange={(e) => { setQ(e.target.value); setI(0) }} onKeyDown={onKey} placeholder="> Search portfolio..." aria-label="Search commands" role="combobox" aria-expanded="true" aria-controls="cmd-list" aria-activedescendant={list[i] ? `cmd-${i}` : undefined} />
      </div>
      <ul id="cmd-list" role="listbox" className="cmd-list">
        {list.map((c, n) => (
          <li key={c.label} id={`cmd-${n}`} role="option" aria-selected={n === i} className={n === i ? 'sel' : ''} onMouseEnter={() => setI(n)} onClick={() => run(c)}>
            <span>{c.label}</span><em>{c.hint}</em>{n === i && <CornerDownLeft size={14} />}
          </li>
        ))}
        {!list.length && <li className="empty">No matching command</li>}
      </ul>
    </Modal>
  )
}
