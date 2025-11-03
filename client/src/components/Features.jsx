import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ReceiptText, Sparkles, PieChart } from "lucide-react";

const features = [
	{
		title: "Smart receipt scan",
		description: "Auto-extract totals, dates, and vendors from photos.",
		icon: ReceiptText,
	},
	{
		title: "AI categorization",
		description: "Transactions tagged to the right buckets instantly.",
		icon: Sparkles,
	},
	{
		title: "Insights & charts",
		description: "See trends, burn, and anomalies at a glance.",
		icon: PieChart,
	},
];

export default function Features() {
	return (
		<section id="features" className="bg-white py-16 dark:bg-neutral-900 md:py-24">
			<div className="mx-auto max-w-7xl px-4">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-semibold md:text-4xl">Features to love</h2>
					<p className="mt-3 text-neutral-600 dark:text-neutral-300">Everything you need to stay on top of spending.</p>
				</div>
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{features.map((f) => (
						<Card key={f.title}>
							<CardHeader>
								<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
									<f.icon className="h-5 w-5" />
								</div>
								<CardTitle>{f.title}</CardTitle>
								<CardDescription>{f.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="h-24 rounded-md bg-neutral-50 dark:bg-neutral-800" />
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}


