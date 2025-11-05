import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ className, ...props }) {
	return (
		<AccordionPrimitive.Root
			className={cn("w-full", className)}
			{...props}
		/>
	);
}

export function AccordionItem({ className, ...props }) {
	return (
		<AccordionPrimitive.Item
			className={cn("border-b border-neutral-200 dark:border-neutral-800", className)}
			{...props}
		/>
	);
}

export function AccordionTrigger({ className, children, ...props }) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				className={cn(
					"flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
					className
				)}
				{...props}
			>
				{children}
				<ChevronDown className="h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 dark:text-neutral-400" />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

export function AccordionContent({ className, children, ...props }) {
	return (
		<AccordionPrimitive.Content
			className={cn(
				"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
				className
			)}
			{...props}
		>
			<div className="pb-4 pt-0 text-neutral-600 dark:text-neutral-300">{children}</div>
		</AccordionPrimitive.Content>
	);
}

