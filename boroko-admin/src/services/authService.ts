import { adminService } from './adminService'
import type{ LoginCredentials } from '../types/auth'
export const authService = {
  async login({ email, password }: LoginCredentials) {
    const a = (await adminService.list()).find(x => x.email === email)
    if (!a) throw new Error('Access Denied: Email address not recognized in host directory.')
    if (a.status !== 'Active') throw new Error('This account is suspended.')
    if (a.password !== password) throw new Error('Invalid email or password.')
    localStorage.setItem('boroko.session', a.id); return a },
  logout() { localStorage.removeItem('boroko.session') },
  async current() { const id = localStorage.getItem('boroko.session'); const a = id ? await adminService.get(id) : undefined; return a?.status === 'Active' ? a : null },
}