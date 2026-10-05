import { useCallback, useEffect, useState } from 'react'
import type{ Guesthouse } from '../types/guesthouse'
import { guesthouseService } from '../services/guesthouseService'
export function useGuesthouses() {
  const [items, setItems] = useState<Guesthouse[]>([]); const [loading, setLoading] = useState(true)
  const reload = useCallback(async () => { setItems(await guesthouseService.list()); setLoading(false) }, [])
  useEffect(() => { reload() }, [reload])
  const remove = async (id: string) => { await guesthouseService.remove(id); await reload() }
  return { items, loading, reload, remove }
}