import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { AdminUser } from '../types/admin'
import type{ LoginCredentials } from '../types/auth'
import { authService } from '../services/authService'
interface Ctx { user: AdminUser | null; loading: boolean; login: (c: LoginCredentials) => Promise<void>; logout: () => void }
export const AuthContext = createContext<Ctx>(null as unknown as Ctx)
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null); const [loading, setLoading] = useState(true)
  useEffect(() => { authService.current().then(u => { setUser(u); setLoading(false) }) }, [])
  const login = async (c: LoginCredentials) => setUser(await authService.login(c))
  const logout = () => { authService.logout(); setUser(null) }
  return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>
}