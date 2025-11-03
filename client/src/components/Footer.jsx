export default function Footer() {
	return (
		<footer className="border-t border-neutral-200 bg-white py-8 dark:border-neutral-800 dark:bg-neutral-950">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-neutral-500 dark:text-neutral-400 md:flex-row">
				<div className="flex items-center gap-2">
					<div className="h-6 w-6 rounded-md bg-black dark:bg-white" />
					<span className="font-medium text-neutral-900 dark:text-neutral-100">AI Expense</span>
				</div>
				<p>© {new Date().getFullYear()} Omkar&Prasad. All rights reserved.</p>
				<nav className="flex gap-4">
					<a href="#" className="hover:underline">Terms</a>
					<a href="#" className="hover:underline">Privacy</a>
				</nav>
			</div>
		</footer>
	);
}


