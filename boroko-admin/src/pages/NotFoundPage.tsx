import { Link } from 'react-router-dom'
import { EmptyState } from '../components/ui'
import { ROUTES } from '../utils/constants'
export const NotFoundPage = () => <EmptyState title="404 · Page not found" text="The page you're looking for doesn't exist." action={<p style={{ marginTop: 12 }}><Link className="btn" to={ROUTES.dashboard}>Back to dashboard</Link></p>} />