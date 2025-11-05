import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
	{
		question: "How does AI expense tracking work?",
		answer: "Our AI uses advanced OCR technology to scan receipts and extract key information like amounts, dates, and vendors. It then automatically categorizes expenses using machine learning algorithms trained on millions of transactions.",
	},
	{
		question: "Is my financial data secure?",
		answer: "Absolutely! We use bank-level encryption (256-bit SSL) to protect all your data. Your information is stored securely and never shared with third parties. We comply with GDPR and SOC 2 standards.",
	},
	{
		question: "Can I export my expense reports?",
		answer: "Yes! You can export your expense data in multiple formats including PDF, CSV, and Excel. Reports can be customized with your company branding and sent directly via email.",
	},
	{
		question: "Does it work offline?",
		answer: "Yes, you can scan receipts and add expenses offline. All data will sync automatically when you reconnect to the internet. Your data is stored locally on your device until sync.",
	},
	{
		question: "What payment methods do you accept?",
		answer: "We accept all major credit cards, PayPal, and bank transfers. We offer monthly and annual subscription plans with a 14-day free trial. Cancel anytime with no questions asked.",
	},
];

export default function FAQ() {
	return (
		<section id="faq" className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-50 py-16 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 md:py-24">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
			<div className="relative mx-auto max-w-4xl px-4">
				<div className="mx-auto max-w-2xl text-center mb-12">
					<h2 className="text-3xl font-bold gradient-text md:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="mt-3 text-neutral-600 dark:text-neutral-300">Everything you need to know about AI Expense Tracker</p>
				</div>
				<Accordion type="single" collapsible className="w-full space-y-2">
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index}`} className="rounded-lg border border-purple-500/30 bg-white/80 px-4 backdrop-blur-sm transition-all hover:border-purple-400/50 dark:bg-neutral-800/50">
							<AccordionTrigger className="text-left text-neutral-900 dark:text-neutral-100 hover:no-underline">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-neutral-600 dark:text-neutral-300">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}

