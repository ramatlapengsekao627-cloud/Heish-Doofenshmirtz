
import type { Guesthouse } from './guesthouse'
export interface DashboardStats { total: number; topCity: string; topRated?: Guesthouse; avgPrice: number; addedThisMonth: number
  byCity: { city: string; count: number; avgPrice: number }[]; trend: { month: string; count: number }[] }





