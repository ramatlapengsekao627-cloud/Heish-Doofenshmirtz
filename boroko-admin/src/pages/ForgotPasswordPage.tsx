import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Input } from '../components/ui'
import { ROUTES } from '../utils/constants'
export const ForgotPasswordPage = () => { const [sent, setSent] = useState(false)
  return <div className="login" style={{ gridTemplateColumns: '1fr' }}><div className="r"><form onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true) }}>
    <h1>Reset password</h1><p className="mu">Enter your admin email and we'll send reset instructions.</p>
    {sent ? <div style={{ marginTop: 14 }}><Alert type="success">If that email is registered, reset instructions have been sent.</Alert></div> : <><Input label="Email address" type="email" required /><Button style={{ width: '100%', marginTop: 16 }}>Send reset link</Button></>}
    <p style={{ marginTop: 14 }}><Link className="lnk" to={ROUTES.login}>← Back to sign in</Link></p></form></div></div> }