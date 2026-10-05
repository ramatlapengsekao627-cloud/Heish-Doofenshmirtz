import type{ GuesthouseFormValues } from '../types/guesthouse'
import type{ AdminFormValues } from '../types/admin'
export const isEmail = (s: string) => /^\S+@\S+\.\S+$/.test(s)
export const passwordRules = (p: string) => [{ label: 'Minimum 8 characters in length', ok: p.length >= 8 },
  { label: 'At least one number', ok: /\d/.test(p) }, { label: 'At least one uppercase letter', ok: /[A-Z]/.test(p) }]
export const isPasswordValid = (p: string) => passwordRules(p).every(r => r.ok)
export const isCoord = (s: string, max: number) => s.trim() !== '' && !isNaN(+s) && Math.abs(+s) <= max
export function validateGuesthouse(v: GuesthouseFormValues) {
  const e: Record<string, string> = {}
  ;(['name', 'description', 'city', 'country', 'price', 'contact', 'email'] as const).forEach(k => { if (!String(v[k]).trim()) e[k] = 'Required' })
  if (!v.logo) e.logo = 'Logo is required'
  if (v.email && !isEmail(v.email)) e.email = 'Invalid email format'
  if (!isCoord(v.lat, 90)) e.lat = 'Latitude must be -90 to 90'
  if (!isCoord(v.lng, 180)) e.lng = 'Longitude must be -180 to 180'
  if (v.price && +v.price <= 0) e.price = 'Must be greater than 0'
  return e
}
export function validateAdmin(v: AdminFormValues, editing: boolean) {
  const e: Record<string, string> = {}
  if (!v.name.trim()) e.name = 'Required'
  if (!isEmail(v.email)) e.email = 'Invalid email format'
  if ((!editing || v.password) && !isPasswordValid(v.password)) e.password = 'Password does not meet requirements'
  return e
}