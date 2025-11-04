import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/providers/AuthProvider'
import { toast } from 'sonner'

export default function ProtectedRoute({ children }){
	const { user } = useAuth()
	const location = useLocation()
	if (!user){
		toast.error('Please sign in to continue')
		return <Navigate to="/login" replace state={{ from: location }} />
	}
	return children
}


