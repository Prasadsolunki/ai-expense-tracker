import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const variants = {
	default:
		"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
	secondary:
		"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
	ghost:
		"inline-flex items-center justify-center rounded-md text-sm font-medium text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800",
};

export function Button({ className, variant = "default", asChild = false, ...props }) {
	const Comp = asChild ? Slot : "button";
	return <Comp className={cn("h-10 px-4 py-2", variants[variant], className)} {...props} />;
}


