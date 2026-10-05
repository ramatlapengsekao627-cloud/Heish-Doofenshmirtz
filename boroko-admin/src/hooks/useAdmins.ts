import { useCallback, useEffect, useState } from 'react'
import type { AdminStatus, AdminUser } from '../types/admin'
import { adminService } from '../services/adminService'
export function useAdmins() {
  const [items, setItems] = useState<AdminUser[]>([]); const [loading, setLoading] = useState(true)
  const reload = useCallback(async () => { setItems(await adminService.list()); setLoading(false) }, [])
  useEffect(() => { reload() }, [reload])
  const setStatus = async (id: string, s: AdminStatus) => { await adminService.setStatus(id, s); await reload() }
  return { items, loading, setStatus }
}
export function useAdmin(id?: string) {
  const [data, setData] = useState<AdminUser>(); const [loading, setLoading] = useState(true)
  useEffect(() => { if (id) adminService.get(id).then(a => { setData(a); setLoading(false) }) }, [id])
  return { data, loading }
}