import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import Header from '@/components/home/Header'
import api from '@/api/axios'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword(){
	const [email, setEmail] = useState('')
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!email) return toast.error('Please enter your email')
		try {
			setLoading(true)
			const res = await api.post('/auth/forgot-password', { email })
			toast.success(res.data.message || 'Reset link sent! Check your email.')
			setEmail('')
			setTimeout(() => navigate('/login'), 3000)
		} catch (err) {
			console.error(err)
			toast.error(err.response?.data?.message || 'Error sending reset link')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
			<Header />
			<main className="mx-auto max-w-md px-4 py-12">
				<div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
					<h1 className="text-3xl font-semibold">Forgot Password</h1>
					<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
						Enter your email, and we’ll send you a reset link.
					</p>
					<form onSubmit={handleSubmit} className="mt-8 space-y-4">
						<div>
							<label className="mb-1 block text-sm">Email</label>
							<input 
								type="email" 
								value={email} 
								onChange={(e) => setEmail(e.target.value)}
								className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900" 
								placeholder="you@example.com" 
							/>
						</div>
						<Button className="w-full" type="submit" disabled={loading}>
							{loading ? 'Sending...' : 'Send Reset Link'}
						</Button>
					</form>
				</div>
			</main>
		</div>
	)
}
