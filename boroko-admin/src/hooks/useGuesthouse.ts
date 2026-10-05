import { useEffect, useState } from 'react'
import type{ Guesthouse } from '../types/guesthouse'
import { guesthouseService } from '../services/guesthouseService'
export function useGuesthouse(id?: string) {
  const [data, setData] = useState<Guesthouse>(); const [loading, setLoading] = useState(true)
  useEffect(() => { if (id) guesthouseService.get(id).then(g => { setData(g); setLoading(false) }) }, [id])
  return { data, loading }
}