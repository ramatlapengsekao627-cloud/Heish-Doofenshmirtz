import { useNavigate } from 'react-router-dom'
import { AdminForm } from '../components/admins/AdminForm'
import { PageHeader } from '../layouts/PageHeader'
import { adminService } from '../services/adminService'
import { useToast } from '../hooks/useToast'
import { ROUTES } from '../utils/constants'
export const AdminCreatePage = () => { const nav = useNavigate(); const { push } = useToast()
  return <><PageHeader title="Create Admin Console User" subtitle="Authorize new administrators. Public signups are strictly deactivated." />
    <AdminForm onSubmit={async v => { await adminService.create(v); push('Admin account created'); nav(ROUTES.admins) }} /></> }