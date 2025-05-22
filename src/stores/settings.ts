import { persistentMap } from "@nanostores/persistent";

/** Needs to be a stringified number between 0-9, so we can convert between hotkeys and back. */
export type ValidBackdropId =
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "0";

export type SettingsValue = {
	backdrop: ValidBackdropId;
};

export const $settings = persistentMap<SettingsValue>("settings:", {
	backdrop: "1",
});
