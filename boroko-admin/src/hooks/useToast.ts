import { useContext } from 'react'
import { ToastContext } from '../components/ui/ToastProvider'
export const useToast = () => useContext(ToastContext)