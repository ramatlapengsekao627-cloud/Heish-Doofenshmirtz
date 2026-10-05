import { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { Chip, ConfirmDialog, Spinner } from '../components/ui'
import { ImageGalleryGrid } from '../components/guesthouses/ImageGalleryGrid'
import { PropertyOverview } from '../components/guesthouses/PropertyOverview'
import { RoomsPoliciesCard } from '../components/guesthouses/RoomsPoliciesCard'
import { HostContactCard } from '../components/guesthouses/HostContactCard'
import { MapPreview } from '../components/guesthouses/MapPreview'
import { PageHeader } from '../layouts/PageHeader'
import { guesthouseService } from '../services/guesthouseService'
import { useGuesthouse } from '../hooks/useGuesthouse'
import { useToast } from '../hooks/useToast'
import { currency } from '../utils/formatters'
import { ROUTES } from '../utils/constants'
export const GuesthouseDetailPage = () => { const { id } = useParams(); const { data: g, loading } = useGuesthouse(id); const nav = useNavigate(); const { push } = useToast(); const [del, setDel] = useState(false)
  if (loading) return <div className="empty"><Spinner /> Loading...</div>
  if (!g) return <Navigate to={ROUTES.guesthouses} replace />
  return <><PageHeader title="Guesthouse Profile Details" subtitle="Full registry metadata, configuration and management tools"
    actions={<><Link className="btn" to={ROUTES.guesthouseEdit(g.id)}>Edit Guesthouse</Link><button className="btn d" onClick={() => setDel(true)}>Delete Guesthouse</button></>} />
    <div className="row" style={{ marginBottom: 16, justifyContent: 'flex-start' }}>{g.logo ? <img src={g.logo} style={{ height: 56, flex: 'none' }} /> : null}<div style={{ flex: 4 }}><h1>{g.name}</h1><p className="mu">{g.city}, {g.country} · ★ {g.rating} · {currency(g.price, g.currency)}/night</p></div></div>
    <div className="grid g3"><div><div className="card"><ImageGalleryGrid images={g.gallery} /></div><PropertyOverview g={g} /><RoomsPoliciesCard g={g} />
      <div className="card"><h2>Active Amenities</h2><div className="chips">{g.amenities.map(a => <Chip key={a} label={a} active />)}</div></div></div>
      <div><HostContactCard g={g} /><div className="card"><h2>Location Coordinates</h2><p className="mu">Lat {g.lat} · Lng {g.lng}</p><MapPreview lat={g.lat} lng={g.lng} /></div></div></div>
    <ConfirmDialog open={del} title="Delete Guesthouse Profile?" text={`This will permanently delete ${g.name} from the central portal directory.`} confirmLabel="Delete Property" onCancel={() => setDel(false)}
      onConfirm={async () => { await guesthouseService.remove(g.id); push('Guesthouse deleted'); nav(ROUTES.guesthouses) }} /></> }