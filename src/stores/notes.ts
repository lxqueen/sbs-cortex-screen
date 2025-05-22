import { persistentAtom } from "@nanostores/persistent";

export const $notes = persistentAtom<string>("notes", "");
