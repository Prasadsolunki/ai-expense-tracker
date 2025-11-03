import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export function Sheet({ open, onOpenChange, children }) {
	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange}>
			{children}
		</Dialog.Root>
	);
}

export function SheetTrigger(props) {
	return <Dialog.Trigger {...props} />;
}

export function SheetContent({ side = "left", className, children, ...props }) {
	const sides = {
		left: "left-0 top-0 h-full w-80 border-r",
		right: "right-0 top-0 h-full w-80 border-l",
		top: "top-0 left-0 w-full border-b",
		bottom: "bottom-0 left-0 w-full border-t",
	};
	return (
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" />
			<Dialog.Content
				className={cn(
					"fixed z-50 bg-white p-6 shadow-lg outline-none transition-all dark:bg-neutral-900",
					sides[side],
					className
				)}
				{...props}
			>
				{children}
			</Dialog.Content>
		</Dialog.Portal>
	);
}

export function SheetClose(props) {
	return <Dialog.Close {...props} />;
}


