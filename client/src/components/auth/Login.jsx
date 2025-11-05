import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import Header from '@/components/home/Header'
import { useAuth } from '@/providers/AuthProvider'
import api from '@/api/axios'

export default function Login(){
	const navigate = useNavigate()
	const { login } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function onSubmit(e){
	e.preventDefault()
	if (!email || !password){
		toast.error('Email and password are required')
		return
	}
	try {
		const res = await api.post('/auth/login', { email, password })
		const token = res.data.token
		localStorage.setItem('accessToken', token)
		toast.success('Welcome back!')
		navigate('/dashboard')
	} catch (err){
		console.error(err)
		toast.error(err.response?.data?.message || 'Invalid credentials')
	}
}

	return (
		<div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
			<Header />
			<main className="mx-auto max-w-md px-4 py-12">
				<div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
					<h1 className="text-3xl font-semibold">Sign in</h1>
					<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Welcome back, we missed you.</p>
					<form onSubmit={onSubmit} className="mt-8 space-y-4">
					<div>
						<label className="mb-1 block text-sm">Email</label>
						<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900" placeholder="you@example.com" />
					</div>
					<div>
						<label className="mb-1 block text-sm">Password</label>
						<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900" placeholder="••••••••" />
						<div className="mt-2 text-right">
							<Link to="/forgot-password" className="text-sm text-neutral-600 underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
  							Forgot password?
							</Link>
						</div>
					</div>
					<Button className="w-full" type="submit">Sign in</Button>
				</form>
				<p className="mt-4 text-sm">New here? <Link to="/register" className="font-medium underline">Create an account</Link></p>
				</div>
			</main>
		</div>
	)
}


