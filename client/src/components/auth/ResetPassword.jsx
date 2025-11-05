import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import Header from '@/components/home/Header'
import api from '@/api/axios'

export default function ResetPassword(){
	const { token } = useParams()
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!password) return toast.error('Enter a new password')
		try {
			setLoading(true)
			const res = await api.post(`/auth/reset-password/${token}`, { password })
			toast.success(res.data.message || 'Password reset successfully!')
			localStorage.setItem('accessToken', token) // store token
			setTimeout(() => navigate('/login'), 2500)
		} catch (err) {
			console.error(err)
			toast.error(err.response?.data?.message || 'Error resetting password')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
			<Header />
			<main className="mx-auto max-w-md px-4 py-12">
				<div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
					<h1 className="text-3xl font-semibold">Reset Password</h1>
					<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
						Enter your new password below.
					</p>
					<form onSubmit={handleSubmit} className="mt-8 space-y-4">
						<div>
							<label className="mb-1 block text-sm">New Password</label>
							<input 
								type="password" 
								value={password} 
								onChange={(e) => setPassword(e.target.value)}
								className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900" 
								placeholder="••••••••"
							/>
						</div>
						<Button className="w-full" type="submit" disabled={loading}>
							{loading ? 'Updating...' : 'Reset Password'}
						</Button>
					</form>
				</div>
			</main>
		</div>
	)
}
