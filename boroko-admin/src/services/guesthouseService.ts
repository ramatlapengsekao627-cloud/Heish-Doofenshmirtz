import { apiClient, uid } from './apiClient'
import type{ Guesthouse, GuesthouseFormValues } from '../types/guesthouse'
import { SEED_GUESTHOUSES } from '../utils/constants'
import { today } from '../utils/formatters'
const K = 'guesthouses'
const all = () => apiClient.get<Guesthouse[]>(K, SEED_GUESTHOUSES)
export const guesthouseService = {
  list: all,
  get: async (id: string) => (await all()).find(g => g.id === id),
  async create(v: GuesthouseFormValues) { await apiClient.set(K, [...(await all()), { ...v, id: uid(), rating: 0, created: today() }]) },
  async update(id: string, v: GuesthouseFormValues) { await apiClient.set(K, (await all()).map(g => g.id === id ? { ...g, ...v } : g)) },
  async remove(id: string) { await apiClient.set(K, (await all()).filter(g => g.id !== id)) },
}