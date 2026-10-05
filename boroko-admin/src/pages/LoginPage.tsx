import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Alert, Button, Input, PasswordInput } from '../components/ui'
import { useAuth } from '../hooks/useAuth'
import { ROUTES } from '../utils/constants'
export const LoginPage = () => { const { user, login } = useAuth(); const nav = useNavigate()
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [err, setErr] = useState(''); const [busy, setBusy] = useState(false)
  if (user) return <Navigate to={ROUTES.dashboard} replace />
  const submit = async (e: FormEvent) => { e.preventDefault(); setErr(''); setBusy(true)
    try { await login({ email, password }); nav(ROUTES.dashboard) } catch (x) { setErr((x as Error).message); setBusy(false) } }
  return <div className="login"><div className="l"><h1 style={{ fontSize: 30 }}>Boroko Guesthouse Management Portal</h1><p>Your Properties. One Place. Manage boutique accommodation across Botswana.</p></div>
    <div className="r"><form onSubmit={submit}><h1>Admin Portal</h1><p className="mu">Please enter your authorized console credentials</p>
      {err && <div style={{ marginTop: 14 }}><Alert>{err}</Alert></div>}
      <Input label="Email address" type="email" required placeholder="admin@company.com" value={email} onChange={e => setEmail(e.target.value)} />
      <PasswordInput label="Password" required value={password} onChange={e => setPassword(e.target.value)} />
      <p style={{ textAlign: 'right', marginTop: 6 }}><Link className="lnk" to={ROUTES.forgot}>Forgot Password?</Link></p>
      <Button loading={busy} style={{ width: '100%', marginTop: 12 }}>{busy ? 'Verifying credentials...' : 'Sign In'}</Button>
      <p className="mu" style={{ marginTop: 12 }}>Demo: admin@boroko.com / Admin123</p></form></div></div> }