import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Spinner } from '../components/ui'
import { ROUTES } from '../utils/constants'
export const ProtectedRoute = () => { const { user, loading } = useAuth()
  if (loading) return <div className="empty"><Spinner /> Loading...</div>
  return user ? <Outlet /> : <Navigate to={ROUTES.login} replace /> }