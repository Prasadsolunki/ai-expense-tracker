import { useAuth } from '@/providers/AuthProvider'

export default function Dashboard(){
	const { user } = useAuth()
	return (
		<div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
			<main className="mx-auto max-w-7xl px-4 py-12">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-semibold">Welcome to dashboard</h1>
					<div className="flex items-center gap-3">
						<span className="text-sm">{user?.name}</span>
						{user?.avatarUrl ? (
							<img src={user.avatarUrl} alt="avatar" className="h-8 w-8 rounded-full object-cover" />
						) : (
							<div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800" />
						)}
					</div>
				</div>
				<p className="mt-4 text-neutral-600 dark:text-neutral-300">You're signed in. Build your expense insights here.</p>
			</main>
		</div>
	)
}


