import { useStore } from "@nanostores/react";
import { Page } from "../components/layout/Page";
import { $notes } from "../stores/notes";

export default function NotesPage() {
	const notes = useStore($notes);

	return (
		<Page className="flex flex-col gap-2">
			<h1>Notes</h1>

			<textarea
				className="textarea preset-tonal flex-1"
				value={notes}
				onChange={(e) => $notes.set(e.target.value)}
			/>
		</Page>
	);
}
