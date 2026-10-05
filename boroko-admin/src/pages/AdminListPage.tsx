import { useState } from 'react'
import type { AdminUser } from '../types/admin'
import { Link } from 'react-router-dom'
import { ConfirmDialog, FilterTabs, SearchInput, Spinner } from '../components/ui'
import { AdminTable } from '../components/admins/AdminTable'
import { PageHeader } from '../layouts/PageHeader'
import { useAdmins } from '../hooks/useAdmins'
import { useAuth } from '../hooks/useAuth'
import { ROUTES } from '../utils/constants'
export const AdminListPage = () => { const { items, loading, setStatus } = useAdmins(); const { user } = useAuth(); const [q, setQ] = useState(''); const [tab, setTab] = useState('All'); const [dz, setDz] = useState<AdminUser | null>(null)
  const rows = items.filter(a => (tab === 'All' || a.status === 'Suspended') && (a.name + a.email).toLowerCase().includes(q.toLowerCase()))
  return <><PageHeader title="Admin Users" subtitle="Manage authorized console staff, credentials and access" actions={<Link className="btn" to={ROUTES.adminNew}>+ Add Admin</Link>} />
    <SearchInput value={q} onChange={setQ} placeholder="Search admin users..." /><FilterTabs options={['All', 'Suspended']} value={tab} onChange={setTab} labels={{ All: 'All Admins' }} />
    {loading ? <div className="empty"><Spinner /> Loading...</div> : <AdminTable rows={rows} currentId={user?.id} onDeactivate={setDz} onActivate={a => setStatus(a.id, 'Active')} />}
    <ConfirmDialog open={!!dz} title="Deactivate Admin Staff" text={`Deactivating ${dz?.name} will immediately restrict active console login keys.`} confirmLabel="Deactivate Staff" cancelLabel="Keep Active"
      onCancel={() => setDz(null)} onConfirm={async () => { await setStatus(dz!.id, 'Suspended'); setDz(null) }} /></> }