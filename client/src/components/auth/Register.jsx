import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import Header from '@/components/home/Header'
import { useAuth } from '@/providers/AuthProvider'
import api from '@/api/axios'

export default function Register(){
	const navigate = useNavigate()
	const { register } = useAuth()
	const fileInputRef = useRef(null)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [avatarUrl, setAvatarUrl] = useState('')
	const [preview, setPreview] = useState('')

	function handleFileChange(e){
		const file = e.target.files?.[0]
		if (!file) return
		
		const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
		if (!validTypes.includes(file.type)){
			toast.error('Please upload a valid image file (JPG, PNG, or GIF)')
			return
		}
		
		if (file.size > 5 * 1024 * 1024){
			toast.error('Image size should be less than 5MB')
			return
		}
		
		const reader = new FileReader()
		reader.onloadend = () => {
			const base64 = reader.result
			setAvatarUrl(base64)
			setPreview(base64)
		}
		reader.readAsDataURL(file)
	}

	async function onSubmit(e) {
	e.preventDefault()
	if (!name || !email || !password) {
		toast.error('Name, email and password are required')
		return
	}
	try {
		const res = await api.post('/auth/register', { name, email, password, avatarUrl })
		toast.success('Account created!')
		navigate('/login')
	} catch (err){
		console.error(err)
		toast.error(err.response?.data?.message || 'Registration failed')
	}
	}


	return (
		<div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
			<Header />
			<main className="mx-auto max-w-md px-4 py-12">
				<div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
					<h1 className="text-3xl font-semibold">Create your account</h1>
					<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Start tracking expenses with AI.</p>
					<form onSubmit={onSubmit} className="mt-8 space-y-4">
						<div>
							<label className="mb-1 block text-sm">Name</label>
							<input value={name} onChange={(e)=>setName(e.target.value)} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900" placeholder="Your name" />
						</div>
						<div>
							<label className="mb-1 block text-sm">Email</label>
							<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900" placeholder="you@example.com" />
						</div>
						<div>
							<label className="mb-1 block text-sm">Password</label>
							<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900" placeholder="••••••••" />
						</div>
						<div>
							<label className="mb-1 block text-sm">Profile picture (optional)</label>
							<input 
								ref={fileInputRef}
								type="file" 
								accept="image/jpeg,image/jpg,image/png,image/gif"
								onChange={handleFileChange}
								className="hidden"
							/>
							<div className="flex flex-wrap items-center gap-4">
								<button
									type="button"
									onClick={() => fileInputRef.current?.click()}
									className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
								>
									Choose file
								</button>
								{preview && (
									<div className="relative">
										<img src={preview} alt="Preview" className="h-16 w-16 rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-700" />
										<button
											type="button"
											onClick={() => {
												setPreview('')
												setAvatarUrl('')
												if (fileInputRef.current) fileInputRef.current.value = ''
											}}
											className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center hover:bg-red-600"
										>
											×
										</button>
									</div>
								)}
							</div>
							<p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">JPG, PNG, or GIF (max 5MB)</p>
						</div>
						<Button className="w-full" type="submit">Create account</Button>
					</form>
					<p className="mt-4 text-sm">Already have an account? <Link to="/login" className="font-medium underline">Sign in</Link></p>
				</div>
			</main>
		</div>
	)
}


