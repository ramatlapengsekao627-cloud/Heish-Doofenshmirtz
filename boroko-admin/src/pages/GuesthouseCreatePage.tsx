import { useNavigate } from 'react-router-dom'
import { GuesthouseForm } from '../components/guesthouses/GuesthouseForm'
import { PageHeader } from '../layouts/PageHeader'
import { guesthouseService } from '../services/guesthouseService'
import { useToast } from '../hooks/useToast'
import { ROUTES } from '../utils/constants'
export const GuesthouseCreatePage = () => { const nav = useNavigate(); const { push } = useToast()
  return <><PageHeader title="Register New Guesthouse" subtitle="Add a new property to the central admin catalog" />
    <GuesthouseForm submitLabel="Register Guesthouse" onSubmit={async v => { await guesthouseService.create(v); push('Property configuration validated and saved successfully'); nav(ROUTES.guesthouses) }} /></> }