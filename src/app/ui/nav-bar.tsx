"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { RowsIcon } from "@radix-ui/react-icons";

const links = [
	{ name: "Home", href: "/" },
	{ name: "Projects", href: "/projects" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" }
]

// TODO : Change to mobile nav menu
export default function NavBar() {
	return (
		<div className="flex justify-end px-8">
			<NavigationMenu className="mt-4">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="px-4"><RowsIcon /></NavigationMenuTrigger>
						<NavigationMenuContent>
							{links.map((link) => {
								return (
									<Link key={link.href} href={link.href} legacyBehavior passHref>
										<NavigationMenuLink className={navigationMenuTriggerStyle()}>
											{link.name}
										</NavigationMenuLink>
									</Link>
								);
							})}
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
