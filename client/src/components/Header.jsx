import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
				<div className="flex items-center gap-2">
					<div className="h-8 w-8 rounded-md bg-black dark:bg-white" />
					<span className="text-base font-semibold">AI Expense</span>
				</div>

				<nav className="hidden md:block">
					<NavigationMenu>
						<NavigationMenuItem>
							<NavigationMenuLink href="#features">Features</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink href="#testimonials">Testimonials</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink href="#pricing">Pricing</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenu>
				</nav>

				<div className="hidden items-center gap-2 md:flex">
					<Button variant="ghost">Sign in</Button>
					<Button>Get Started</Button>
				</div>

				<div className="md:hidden">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" aria-label="Open Menu">
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-80">
							<div className="mb-6 flex items-center justify-between">
								<div className="flex items-center gap-2">
									<div className="h-8 w-8 rounded-md bg-black dark:bg-white" />
									<span className="text-base font-semibold">AI Expense</span>
								</div>
								<SheetClose asChild>
									<Button variant="ghost" aria-label="Close Menu">
										<X className="h-5 w-5" />
									</Button>
								</SheetClose>
							</div>
							<div className="flex flex-col gap-2">
								<a href="#features" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">Features</a>
								<a href="#testimonials" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">Testimonials</a>
								<a href="#pricing" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">Pricing</a>
							</div>
							<div className="mt-6 flex gap-2">
								<Button variant="ghost" className="flex-1">Sign in</Button>
								<Button className="flex-1">Get Started</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}


