import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AdminForm } from '../components/admins/AdminForm'
import { DeactivateAdminCard } from '../components/admins/DeactivateAdminCard'
import { Spinner } from '../components/ui'
import { PageHeader } from '../layouts/PageHeader'
import { adminService } from '../services/adminService'
import { useAdmin } from '../hooks/useAdmins'
import { useAuth } from '../hooks/useAuth'
import { useToast } from '../hooks/useToast'
import { ROUTES } from '../utils/constants'
export const AdminEditPage = () => { const { id } = useParams(); const { data, loading } = useAdmin(id); const { user } = useAuth(); const nav = useNavigate(); const { push } = useToast()
  if (loading) return <div className="empty"><Spinner /> Loading...</div>
  if (!data) return <Navigate to={ROUTES.admins} replace />
  return <><PageHeader title="Edit Admin Profile" subtitle="Configure roles, modify credentials, or deactivate console access." />
    <AdminForm initial={data} onSubmit={async v => { await adminService.update(data.id, v); push('Changes saved'); nav(ROUTES.admins) }}>
      {data.id !== user?.id && data.status === 'Active' && <DeactivateAdminCard name={data.name} onDeactivate={async () => { await adminService.setStatus(data.id, 'Suspended'); push('Admin deactivated'); nav(ROUTES.admins) }} />}</AdminForm></> }