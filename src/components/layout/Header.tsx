import { clsx } from "clsx";
import { NavLink, type To } from "react-router";

interface Link {
	name: string;
	link: To;
}

const NAV_LINKS: Link[] = [
	{ name: "Crew", link: "/" },
	{ name: "Scene", link: "/scene" },
	{ name: "Map", link: "/map" },
	{ name: "Rules", link: "/rules" },
	{ name: "Notes", link: "/notes" },
];

interface HeaderLinkProps {
	link: Link;
}

function HeaderLink({ link }: HeaderLinkProps) {
	return (
		<NavLink
			className={({ isActive }) =>
				clsx("btn", isActive ? "preset-tonal-primary" : "hover:preset-tonal")
			}
			to={link.link}
		>
			{link.name}
		</NavLink>
	);
}

export function Header() {
	return (
		<header className="relative p-gutter pb-0">
			<nav className="flex flex-wrap items-center gap-2">
				<ul className="contents">
					{NAV_LINKS.map((link) => (
						<li key={link.name}>
							<HeaderLink link={link} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
