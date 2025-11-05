export default function Footer() {
	return (
		<footer className="relative border-t border-neutral-200/50 bg-gradient-to-b from-white to-neutral-50 py-8 dark:border-neutral-800/50 dark:from-neutral-950 dark:to-neutral-900">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.05),transparent_50%)]" />
			<div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-neutral-500 dark:text-neutral-400 md:flex-row">
				<div className="flex items-center gap-2">
					<div className="h-6 w-6 rounded-md bg-gradient-to-br from-purple-500 to-pink-500" />
					<span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">AI Expense</span>
				</div>
				<p className="text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Weoto Technologies. All rights reserved.</p>
				<nav className="flex gap-4">
					<a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms</a>
					<a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy</a>
				</nav>
			</div>
		</footer>
	);
}


