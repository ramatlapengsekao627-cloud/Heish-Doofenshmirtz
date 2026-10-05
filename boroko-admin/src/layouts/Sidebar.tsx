import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { ROUTES } from '../utils/constants'
const links = [[ROUTES.dashboard, '▦', 'Dashboard'], [ROUTES.guesthouses, '⌂', 'Guesthouses'], [ROUTES.admins, '☺', 'Admin Users']]
export const Sidebar = () => { const { user, logout } = useAuth(); const nav = useNavigate()
  return <aside className="side"><div className="brand">BOROKO<small>Guesthouse Discovery Platform</small></div>
    {links.map(([to, ic, l]) => <NavLink key={to} to={to} end={to === '/'}><span className="ic">{ic}</span><span className="lb">{l}</span></NavLink>)}
    <div className="me"><b>{user?.name}</b><p className="mu lb">{user?.role}</p>
      <button className="lnk d" style={{ padding: 0, marginTop: 8 }} onClick={() => { logout(); nav(ROUTES.login) }}>Logout</button></div></aside> }