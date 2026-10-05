import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from './components/ui'
import { AuthProvider } from './context/AuthContext'
import { AppRoutes } from './routes'
export default function App() { return <BrowserRouter><ToastProvider><AuthProvider><AppRoutes /></AuthProvider></ToastProvider></BrowserRouter> }