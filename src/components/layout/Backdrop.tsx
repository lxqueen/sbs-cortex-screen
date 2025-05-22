import { useStore } from "@nanostores/react";
import { clsx } from "clsx";
import { useHotkeys } from "react-hotkeys-hook";
import { $settings, type ValidBackdropId } from "../../stores/settings";
import type { Tint } from "../../types";

import lightningNighttime from "../../assets/images/lightning-nighttime-jplenio.jpg";
import ngc7023 from "../../assets/images/ngc-7023-daniel-cid.jpg";
import starTrail from "../../assets/images/star-trail-killian-eon.jpg";

interface BackdropTheme {
	id: ValidBackdropId;
	label: string;
	image?: string;
	tint: Tint;
}

const BACKDROP_THEMES: BackdropTheme[] = [
	{ id: "1", label: "Space", image: ngc7023, tint: "surface" },
	{ id: "2", label: "Slipstream", image: starTrail, tint: "surface" },
	{ id: "0", label: "Underneath", image: lightningNighttime, tint: "error" },
];

const VALID_THEME_IDS: string[] = BACKDROP_THEMES.map((theme) => theme.id);

const HOTKEYS = BACKDROP_THEMES.map((theme) => `alt+${theme.id}`);

export function Backdrop() {
	const { backdrop } = useStore($settings);

	useHotkeys(HOTKEYS, (_event, handler) => {
		if (handler.keys) {
			for (const i in handler.keys) {
				const currentKey = handler.keys[i];

				if (VALID_THEME_IDS.includes(currentKey)) {
					$settings.setKey("backdrop", currentKey as ValidBackdropId);
					console.log("Set backdrop theme to %s", currentKey);
				}
			}
		}
	});

	return (
		<div
			className="fixed inset-0 pointer-events-none select-none"
			aria-hidden="true"
		>
			{BACKDROP_THEMES.map((theme) => (
				<div
					key={theme.id}
					className={clsx(
						"absolute inset-0 w-full h-full object-center object-cover duration-2000",
						"after:content-[''] after:absolute after:inset-0 after:opacity-80 after:bg-blend-overlay",
						{
							"after:preset-filled-primary-50-950": theme.tint === "primary",
							"after:preset-filled-secondary-50-950":
								theme.tint === "secondary",
							"after:preset-filled-tertiary-50-950": theme.tint === "tertiary",
							"after:preset-filled-success-50-950": theme.tint === "success",
							"after:preset-filled-warning-50-950": theme.tint === "warning",
							"after:preset-filled-error-50-950": theme.tint === "error",
							"after:preset-filled-surface-50-950": theme.tint === "surface",
						},
						{
							"opacity-100": backdrop === theme.id,
							"opacity-0": backdrop !== theme.id,
						},
					)}
				>
					{theme.image && (
						<img
							className="absolute inset-0 w-full h-full object-center object-cover"
							src={theme.image}
							alt=""
							aria-hidden="true"
						/>
					)}
				</div>
			))}
		</div>
	);
}
