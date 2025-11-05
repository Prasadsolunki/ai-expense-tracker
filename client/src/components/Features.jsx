import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ReceiptText, Sparkles, PieChart, Zap, Shield, TrendingUp } from "lucide-react";

const features = [
	{
		title: "Smart Receipt Scan",
		description: "Auto-extract totals, dates, and vendors from photos with 99.9% accuracy.",
		icon: ReceiptText,
		color: "from-emerald-400 to-cyan-500",
		bgColor: "bg-emerald-500/10",
		iconColor: "text-emerald-400",
	},
	{
		title: "AI Categorization",
		description: "Transactions tagged to the right buckets instantly using advanced ML.",
		icon: Sparkles,
		color: "from-purple-400 to-pink-500",
		bgColor: "bg-purple-500/10",
		iconColor: "text-purple-400",
	},
	{
		title: "Insights & Charts",
		description: "See trends, burn rates, and anomalies at a glance with beautiful visualizations.",
		icon: PieChart,
		color: "from-blue-400 to-indigo-500",
		bgColor: "bg-blue-500/10",
		iconColor: "text-blue-400",
	},
	{
		title: "Real-time Sync",
		description: "Your data syncs instantly across all devices. Never lose a transaction.",
		icon: Zap,
		color: "from-yellow-400 to-orange-500",
		bgColor: "bg-yellow-500/10",
		iconColor: "text-yellow-400",
	},
	{
		title: "Bank-level Security",
		description: "256-bit encryption keeps your financial data safe and private.",
		icon: Shield,
		color: "from-green-400 to-emerald-500",
		bgColor: "bg-green-500/10",
		iconColor: "text-green-400",
	},
	{
		title: "Smart Analytics",
		description: "Predictive insights help you make better financial decisions.",
		icon: TrendingUp,
		color: "from-rose-400 to-pink-500",
		bgColor: "bg-rose-500/10",
		iconColor: "text-rose-400",
	},
];

export default function Features() {
	return (
		<section id="features" className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-50 py-16 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 md:py-24">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
			<div className="relative mx-auto max-w-7xl px-4">
				<div className="mx-auto max-w-2xl text-center mb-12">
					<h2 className="text-4xl font-bold gradient-text md:text-5xl">
						Features to Love
					</h2>
					<p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
						Everything you need to stay on top of spending with style
					</p>
				</div>
				<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{features.map((f, index) => (
						<Card 
							key={f.title} 
							className={`relative overflow-hidden border-2 border-transparent bg-gradient-to-br ${f.bgColor} backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50 glow-hover group`}
						>
							<div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
							<CardHeader className="relative z-10">
								<div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
									<f.icon className={`h-7 w-7 text-white`} />
								</div>
								<CardTitle className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
									{f.title}
								</CardTitle>
								<CardDescription className="mt-2 text-base text-neutral-600 dark:text-neutral-300">
									{f.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="relative z-10">
								<div className={`h-32 rounded-lg bg-gradient-to-br ${f.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}


