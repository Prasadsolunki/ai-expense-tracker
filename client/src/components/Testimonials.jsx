const testimonials = [
	{
		name: "Sana Q.",
		title: "Founder, Weoto",
		quote: "Cut our month-end close time by 60%. It's a no-brainer.",
	},
	{
		name: "Rahul M.",
		title: "Ops Lead",
		quote: "Receipts to reports in minutes. The AI is scary good.",
	},
	{
		name: "Ivy P.",
		title: "Freelancer",
		quote: "I finally understand where my cash goes every week.",
	},
];

export default function Testimonials() {
	return (
		<section id="testimonials" className="bg-neutral-50 py-16 dark:bg-neutral-950 md:py-24">
			<div className="mx-auto max-w-7xl px-4">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-semibold md:text-4xl">Loved by modern teams</h2>
					<p className="mt-3 text-neutral-600 dark:text-neutral-300">Real words from real users.</p>
				</div>
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{testimonials.map((t) => (
						<figure key={t.name} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
							<blockquote className="text-sm text-neutral-700 dark:text-neutral-300">“{t.quote}”</blockquote>
							<figcaption className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
								<span className="font-medium text-neutral-900 dark:text-neutral-100">{t.name}</span> · {t.title}
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}


