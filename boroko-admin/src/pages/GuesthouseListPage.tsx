import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ConfirmDialog, FilterTabs, Spinner } from '../components/ui'
import { GuesthouseTable } from '../components/guesthouses/GuesthouseTable'
import { PageHeader } from '../layouts/PageHeader'
import { useGuesthouses } from '../hooks/useGuesthouses'
import { useToast } from '../hooks/useToast'
import type{ Guesthouse } from '../types/guesthouse'
import { ROUTES } from '../utils/constants'
export const GuesthouseListPage = () => { const { items, loading, remove } = useGuesthouses(); const [sp] = useSearchParams(); const q = (sp.get('q') ?? '').toLowerCase()
  const [city, setCity] = useState('All'); const [del, setDel] = useState<Guesthouse | null>(null); const { push } = useToast()
  const rows = items.filter(g => (city === 'All' || g.city === city) && (g.name + g.city).toLowerCase().includes(q))
  return <><PageHeader title="Guesthouse Directory" subtitle="Access, manage, verify and register guesthouse records" actions={<Link className="btn" to={ROUTES.guesthouseNew}>+ Register Guesthouse</Link>} />
    <FilterTabs options={['All', ...Array.from(new Set(items.map(g => g.city)))]} value={city} onChange={setCity} labels={{ All: 'All Locations' }} />
    {q && <p className="mu">Showing results for “{sp.get('q')}”</p>}
    {loading ? <div className="empty"><Spinner /> Loading...</div> : <GuesthouseTable rows={rows} hasAny={items.length > 0} onDelete={setDel} />}
    <ConfirmDialog open={!!del} title="Delete Guesthouse Profile?" text={`This will permanently delete ${del?.name} from the central portal directory.`} confirmLabel="Delete Property" onCancel={() => setDel(null)}
      onConfirm={async () => { await remove(del!.id); setDel(null); push('Guesthouse deleted') }} /></> }