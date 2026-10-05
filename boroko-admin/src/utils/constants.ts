import type{ AdminUser } from '../types/admin'
import type{ Guesthouse } from '../types/guesthouse'
export const ROUTES = { login: '/login', forgot: '/forgot-password', dashboard: '/', guesthouses: '/guesthouses', guesthouseNew: '/guesthouses/new',
  guesthouse: (id: string) => `/guesthouses/${id}`, guesthouseEdit: (id: string) => `/guesthouses/${id}/edit`,
  admins: '/admins', adminNew: '/admins/new', adminEdit: (id: string) => `/admins/${id}/edit` }
export const AMENITY_PRESETS = ['Free WiFi', 'Pool', 'Breakfast', 'Parking', 'Air Conditioning', 'Pet Friendly']
export const ROLES = ['Admin', 'Super Admin'] as const
export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024
const mk = (id: string, name: string, city: string, price: string, rating: number, contact: string, email: string, lat: string, lng: string, created: string): Guesthouse => ({
  id, name, city, price, rating, contact, email, lat, lng, created, logo: '', gallery: [], country: 'Botswana', currency: 'BWP', phone: '+267 7X XXX XXX', address: 'Plot 123, ' + city,
  rooms: '4 curated suites', checkIn: '14:00', checkOut: '10:00', rules: 'No smoking inside rooms. Quiet hours 22:00-08:00.',
  description: 'A boutique guesthouse offering warm hospitality and refined local character.', amenities: ['Free WiFi', 'Breakfast', 'Pool'] })
export const SEED_GUESTHOUSES = [mk('1', 'Kalahari Rest', 'Gaborone', '850', 4.9, 'Neo M.', 'neo@kalaharirest.bw', '-24.6282', '25.9231', '2026-10-02'),
  mk('2', 'Okavango Haven', 'Maun', '1200', 4.7, 'Lesego T.', 'hello@okavangohaven.bw', '-19.9833', '23.4167', '2026-09-12'),
  mk('3', 'Chobe View Lodge', 'Kasane', '1500', 4.8, 'Kabo S.', 'stay@chobeview.bw', '-17.8', '25.15', '2026-08-20'),
  mk('4', 'Boroko Inn', 'Gaborone', '600', 4.3, 'Tebo R.', 'info@borokoinn.bw', '-24.65', '25.91', '2026-07-01')]
export const SEED_ADMINS: AdminUser[] = [
  { id: '1', name: 'Admin 1', email: 'admin@boroko.com', role: 'Super Admin', status: 'Active', created: '2026-05-12', password: 'Admin123' },
  { id: '2', name: 'Admin 2', email: 'admin2@boroko.com', role: 'Admin', status: 'Active', created: '2026-06-08', password: 'Admin123' },
  { id: '3', name: 'Admin 3', email: 'admin3@boroko.com', role: 'Admin', status: 'Suspended', created: '2026-03-30', password: 'Admin123' }]