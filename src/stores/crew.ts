import { persistentAtom } from "@nanostores/persistent";
import { type UUIDTypes, v7 as uuidv7 } from "uuid";

export interface Crew {
	id: UUIDTypes;
	name: string;
	fullname?: string;
}

export const $crew = persistentAtom<Crew[]>("crew", [], {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export function addCrew(character: Partial<Crew>) {
	if (!character.id) character.id = uuidv7();
	if (!character.name) character.name = "New Character";

	$crew.set([...$crew.get(), character as Crew]);
}
