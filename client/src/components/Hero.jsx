import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
	const navigate = useNavigate();
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
			<div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<div className="grid items-center gap-10 md:grid-cols-2">
					<div>
						<h1 className="text-4xl font-bold tracking-tight md:text-5xl">
							Track expenses with AI precision
						</h1>
						<p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
							Automate receipt scanning, categorize transactions, and visualize your spending in real time.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<Button onClick={() => navigate('/login')}>Get Started</Button>
							<Button variant="secondary" onClick={() => navigate('/register')}>Create account</Button>
						</div>
					</div>
					<div className="relative">
						{/* 3D-like dashboard mock using layered gradients */}
						<div className="relative mx-auto aspect-[4/3] w-full max-w-xl -rotate-2 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 shadow-xl dark:from-neutral-800 dark:to-neutral-700">
							<div className="h-full w-full rounded-xl bg-white p-4 shadow-inner dark:bg-neutral-900">
								<div className="grid grid-cols-3 gap-4">
									<div className="col-span-2 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
										<div className="h-32 w-full rounded-md bg-gradient-to-r from-emerald-400/30 to-blue-500/30" />
									</div>
									<div className="rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
										<div className="h-32 w-full rounded-md bg-gradient-to-b from-purple-400/30 to-pink-500/30" />
									</div>
									<div className="col-span-3 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
										<div className="h-20 w-full rounded-md bg-gradient-to-r from-indigo-400/30 to-cyan-400/30" />
									</div>
								</div>
							</div>
						</div>
						<div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
					</div>
				</div>
			</div>
		</section>
	);
}


