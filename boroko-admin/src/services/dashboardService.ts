import { guesthouseService } from './guesthouseService'
import type{ DashboardStats } from '../types/dashboard'
import type{ Guesthouse } from '../types/guesthouse'
export const dashboardService = {
  async stats(): Promise<DashboardStats> {
    const g = await guesthouseService.list(); const by: Record<string, Guesthouse[]> = {}; g.forEach(x => (by[x.city] ??= []).push(x))
    const byCity = Object.entries(by).map(([city, l]) => ({ city, count: l.length, avgPrice: Math.round(l.reduce((s, x) => s + +x.price, 0) / l.length) })).sort((a, b) => b.count - a.count)
    const now = new Date()
    const trend = Array.from({ length: 6 }, (_, i) => { const d = new Date(now.getFullYear(), now.getMonth() - 5 + i, 1)
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
      return { month: d.toLocaleString('en', { month: 'short' }), count: g.filter(x => x.created.startsWith(key)).length } })
    return { total: g.length, topCity: byCity[0]?.city ?? '-', topRated: [...g].sort((a, b) => b.rating - a.rating)[0], addedThisMonth: trend[5].count,
      avgPrice: g.length ? Math.round(g.reduce((s, x) => s + +x.price, 0) / g.length) : 0, byCity, trend } },
}