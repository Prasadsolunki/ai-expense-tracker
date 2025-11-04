import { Star } from "lucide-react";

const testimonials = [
	{
		name: "Sana Q.",
		title: "Founder, Weoto",
		quote: "Cut our month-end close time by 60%. It's a no-brainer. The AI is incredibly accurate and saves us hours every week.",
		rating: 5,
		avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sana&backgroundColor=b6e3f4,c0aede,d1d4f9",
		color: "from-emerald-400 to-cyan-500",
	},
	{
		name: "Rahul M.",
		title: "Ops Lead",
		quote: "Receipts to reports in minutes. The AI is scary good at categorizing expenses. Our team loves it!",
		rating: 4.5,
		avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=ffd5dc,ffdfbf,d1d4f9",
		color: "from-purple-400 to-pink-500",
	},
	{
		name: "Ivy P.",
		title: "Freelancer",
		quote: "I finally understand where my cash goes every week. The insights are game-changing for my business.",
		rating: 5,
		avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivy&backgroundColor=ffd5dc,ffdfbf,c0aede",
		color: "from-blue-400 to-indigo-500",
	},
];

function StarRating({ rating }) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	
	return (
		<div className="flex items-center gap-1">
			{[...Array(5)].map((_, i) => {
				if (i < fullStars) {
					return <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />;
				} else if (i === fullStars && hasHalfStar) {
					return (
						<div key={i} className="relative h-4 w-4">
							<Star className="absolute h-4 w-4 fill-neutral-300 text-neutral-300 dark:fill-neutral-600 dark:text-neutral-600" />
							<div className="absolute left-0 top-0 h-4 w-2 overflow-hidden">
								<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
							</div>
						</div>
					);
				} else {
					return <Star key={i} className="h-4 w-4 fill-neutral-300 text-neutral-300 dark:fill-neutral-600 dark:text-neutral-600" />;
				}
			})}
			<span className="ml-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">{rating}</span>
		</div>
	);
}

export default function Testimonials() {
	return (
		<section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-50 py-16 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 md:py-24">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
			<div className="relative mx-auto max-w-7xl px-4">
				<div className="mx-auto max-w-2xl text-center mb-12">
					<h2 className="text-4xl font-bold gradient-text md:text-5xl">
						Loved by Modern Teams
					</h2>
					<p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
						Real words from real users who transformed their expense tracking
					</p>
				</div>
				<div className="mt-12 grid gap-6 md:grid-cols-3">
					{testimonials.map((t, index) => (
						<figure 
							key={t.name} 
							className="group relative overflow-hidden rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-white to-neutral-50/50 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:shadow-purple-500/20 glow-hover dark:from-neutral-800/80 dark:to-neutral-900/80"
						>
							<div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${t.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
							<div className="relative z-10">
								<div className="mb-4 flex items-start justify-between">
									<div className="flex items-center gap-3">
										<img 
											src={t.avatar} 
											alt={t.name}
											className="h-12 w-12 rounded-full border-2 border-purple-400/50 ring-2 ring-purple-500/30"
										/>
										<div>
											<div className="font-semibold text-neutral-900 dark:text-neutral-100">{t.name}</div>
											<div className="text-sm text-neutral-600 dark:text-neutral-400">{t.title}</div>
										</div>
									</div>
								</div>
								<StarRating rating={t.rating} />
								<blockquote className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-200">
									"{t.quote}"
								</blockquote>
							</div>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}


