import { clsx } from "clsx";

interface NavLink {
	name: string;
	link: string;
}

const NAV_LINKS: NavLink[] = [
	{ name: "Scene", link: "/" },
	{ name: "Map", link: "/map" },
	{ name: "Rules", link: "/rules" },
];

export function Header() {
	return (
		<header className="relative p-gutter pb-0">
			<nav>
				<ul className="flex flex-wrap gap-2">
					{NAV_LINKS.map((link) => (
						<li key={link.link}>
							<a
								className={clsx(
									"inline-flex items-center px-2 h-8 text-center border rounded-sm hoverable disablable",
									link.link === "/"
										? "bg-primary-loud-fill text-primary-loud-fore border-primary-loud-border"
										: "bg-primary-quiet-fill text-primary-quiet-fore border-primary-quiet-border",
								)}
								href={link.link}
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
