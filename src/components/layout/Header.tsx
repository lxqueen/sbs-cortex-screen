import { clsx } from "clsx";
import { NavLink, type To } from "react-router";

interface Link {
	name: string;
	link: To;
}

const NAV_LINKS: Link[] = [
	{ name: "Scene", link: "/" },
	{ name: "Map", link: "/map" },
	{ name: "Rules", link: "/rules" },
];

export function Header() {
	return (
		<header className="relative p-gutter pb-0">
			<nav className="flex flex-wrap items-center gap-2">
				<ul className="contents">
					{NAV_LINKS.map((link) => (
						<li key={link.name}>
							<NavLink
								className={({ isActive }) =>
									clsx(
										"inline-flex items-center px-2 h-8 text-center border rounded-sm hoverable disablable duration-150",
										isActive
											? "bg-primary-loud-fill text-primary-loud-fore border-primary-loud-border"
											: "bg-primary-quiet-fill text-primary-quiet-fore border-primary-quiet-border",
									)
								}
								to={link.link}
							>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
