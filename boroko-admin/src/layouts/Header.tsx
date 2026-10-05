import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchInput } from '../components/ui'
import { useDebounce } from '../hooks/useDebounce'
import { ROUTES } from '../utils/constants'
export const Header = () => { const [q, setQ] = useState(''); const d = useDebounce(q); const nav = useNavigate()
  useEffect(() => { if (d) nav(`${ROUTES.guesthouses}?q=${encodeURIComponent(d)}`) }, [d, nav])
  return <div className="top"><SearchInput value={q} onChange={setQ} placeholder="Search guesthouses..." /><span className="badge">● Active Console</span></div> }