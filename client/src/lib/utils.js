import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function formatCurrency(amount = 0, locale = 'en-US', currency = 'USD'){
	if (typeof amount !== 'number') amount = Number(amount) || 0
	return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount)
}

