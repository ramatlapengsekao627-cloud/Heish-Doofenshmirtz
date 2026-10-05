import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { GuesthouseForm } from '../components/guesthouses/GuesthouseForm'
import { Spinner } from '../components/ui'
import { PageHeader } from '../layouts/PageHeader'
import { guesthouseService } from '../services/guesthouseService'
import { useGuesthouse } from '../hooks/useGuesthouse'
import { useToast } from '../hooks/useToast'
import { ROUTES } from '../utils/constants'
export const GuesthouseEditPage = () => { const { id } = useParams(); const { data, loading } = useGuesthouse(id); const nav = useNavigate(); const { push } = useToast()
  if (loading) return <div className="empty"><Spinner /> Loading...</div>
  if (!data) return <Navigate to={ROUTES.guesthouses} replace />
  return <><PageHeader title="Edit Guesthouse Profile" subtitle={`Modify registered details, media, pricing and host contacts of ${data.name}`} />
    <GuesthouseForm initial={data} submitLabel="Save Changes" onSubmit={async v => { await guesthouseService.update(data.id, v); push('Changes saved'); nav(ROUTES.guesthouse(data.id)) }} /></> }