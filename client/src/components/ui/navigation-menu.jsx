import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

export function NavigationMenu({ className, children, ...props }) {
	return (
		<NavigationMenuPrimitive.Root className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)} {...props}>
			<NavigationMenuPrimitive.List className="group flex flex-1 list-none items-center justify-center gap-2">
				{children}
			</NavigationMenuPrimitive.List>
		</NavigationMenuPrimitive.Root>
	);
}

export function NavigationMenuItem({ className, ...props }) {
	return <NavigationMenuPrimitive.Item className={cn("", className)} {...props} />;
}

export function NavigationMenuLink({ className, ...props }) {
	return (
		<NavigationMenuPrimitive.Link
			className={cn(
				"inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
				className
			)}
			{...props}
		/>
	);
}


