import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
				<div 
					className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" 
					onClick={() => navigate('/')}
				>
					<div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
						<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
						</svg>
					</div>
					<span className="text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">AI Expense</span>
				</div>

				<nav className="hidden md:block">
					<NavigationMenu>
						<NavigationMenuItem>
							<NavigationMenuLink 
								href="#features" 
								onClick={(e) => {
									e.preventDefault();
									document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
								}}
								className="cursor-pointer"
							>
								Features
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink 
								href="#testimonials"
								onClick={(e) => {
									e.preventDefault();
									document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
								}}
								className="cursor-pointer"
							>
								Testimonials
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink 
								href="#faq"
								onClick={(e) => {
									e.preventDefault();
									document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
								}}
								className="cursor-pointer"
							>
								FAQ
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenu>
				</nav>

				<div className="hidden items-center gap-2 md:flex">
					<Button onClick={() => navigate('/login')}>Get Started</Button>
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
									<div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
										<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
										</svg>
									</div>
									<span className="text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">AI Expense</span>
								</div>
								<SheetClose asChild>
									<Button variant="ghost" aria-label="Close Menu">
										<X className="h-5 w-5" />
									</Button>
								</SheetClose>
							</div>
							<div className="flex flex-col gap-2">
								<a 
									href="#features" 
									onClick={(e) => {
										e.preventDefault();
										setOpen(false);
										document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
									}} 
									className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
								>
									Features
								</a>
								<a 
									href="#testimonials" 
									onClick={(e) => {
										e.preventDefault();
										setOpen(false);
										document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
									}} 
									className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
								>
									Testimonials
								</a>
								<a 
									href="#faq" 
									onClick={(e) => {
										e.preventDefault();
										setOpen(false);
										document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
									}} 
									className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
								>
									FAQ
								</a>
							</div>
							<div className="mt-6 flex gap-2">
								<Button variant="ghost" className="flex-1" onClick={() => { setOpen(false); navigate('/login'); }}>Sign in</Button>
								<Button className="flex-1" onClick={() => { setOpen(false); navigate('/login'); }}>Get Started</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}


