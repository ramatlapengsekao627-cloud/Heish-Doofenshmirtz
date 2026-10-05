import { apiClient, uid } from './apiClient'
import type{ AdminFormValues, AdminStatus, AdminUser } from '../types/admin'
import { SEED_ADMINS } from '../utils/constants'
import { today } from '../utils/formatters'
const K = 'admins'
const all = () => apiClient.get<AdminUser[]>(K, SEED_ADMINS)
export const adminService = {
  list: all,
  get: async (id: string) => (await all()).find(a => a.id === id),
  async create(v: AdminFormValues) { const l = await all(); if (l.some(a => a.email === v.email)) throw new Error('Email already in use')
    await apiClient.set(K, [...l, { ...v, id: uid(), status: 'Active', created: today() } as AdminUser]) },
  async update(id: string, v: AdminFormValues) { const l = await all(); if (l.some(a => a.email === v.email && a.id !== id)) throw new Error('Email already in use')
    await apiClient.set(K, l.map(a => a.id === id ? { ...a, ...v, password: v.password || a.password } : a)) },
  async setStatus(id: string, status: AdminStatus) { await apiClient.set(K, (await all()).map(a => a.id === id ? { ...a, status } : a)) },
}