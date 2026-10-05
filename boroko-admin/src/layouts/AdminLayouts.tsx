import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
export const AdminLayout = () => <div className="app"><Sidebar /><div className="main"><Header /><div className="page"><Outlet /></div></div></div>