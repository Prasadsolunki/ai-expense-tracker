import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
	const navigate = useNavigate();
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_50%)]" />
			<div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
				<div className="grid items-center gap-10 md:grid-cols-2">
					<div>
						<h1 className="text-4xl font-bold tracking-tight md:text-6xl">
							<span className="gradient-text">Track expenses</span>
							<br />
							<span className="text-neutral-900 dark:text-neutral-100">with AI precision</span>
						</h1>
						<p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300">
							Automate receipt scanning, categorize transactions, and visualize your spending in real time.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							<Button 
								onClick={() => navigate('/login')}
								className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/50"
							>
								Get Started
							</Button>
							<Button 
								variant="secondary" 
								onClick={() => navigate('/register')}
								className="border-2 border-purple-400/50 hover:border-purple-400"
							>
								Create account
							</Button>
						</div>
					</div>
					<div className="relative">
						{/* 3D-like dashboard mock using layered gradients */}
						<div className="relative mx-auto aspect-[4/3] w-full max-w-xl -rotate-2 rounded-2xl bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-cyan-400/20 p-4 shadow-2xl neon-border glow-hover">
							<div className="h-full w-full rounded-xl bg-white/90 backdrop-blur-sm p-4 shadow-inner dark:bg-neutral-900/90">
								<div className="grid grid-cols-3 gap-4">
									<div className="col-span-2 rounded-lg bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 p-4">
										<div className="h-32 w-full rounded-md bg-gradient-to-r from-emerald-400/40 to-blue-500/40" />
									</div>
									<div className="rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-500/20 p-4">
										<div className="h-32 w-full rounded-md bg-gradient-to-b from-purple-400/40 to-pink-500/40" />
									</div>
									<div className="col-span-3 rounded-lg bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 p-4">
										<div className="h-20 w-full rounded-md bg-gradient-to-r from-indigo-400/40 to-cyan-400/40" />
									</div>
								</div>
							</div>
						</div>
						<div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-400/30 blur-3xl animate-pulse" />
						<div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
					</div>
				</div>
			</div>
		</section>
	);
}


