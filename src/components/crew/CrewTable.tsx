import { useStore } from "@nanostores/react";
import { $crew, addCrew } from "../../stores/crew";

export function CrewTable() {
	const crew = useStore($crew);

	function onAddCrew() {
		addCrew({});
	}

	return (
		<div className="table-wrap">
			<table className="table caption-bottom">
				<thead>
					<tr>
						<th>Name</th>
						<th>Fullname</th>
						<th>&nbsp;</th>
					</tr>
				</thead>

				<tbody>
					{crew.map((row) => (
						<tr key={row.id.toString()}>
							<td>{row.name}</td>
							<td>{row.fullname}</td>
							<td className="text-right">
								<button type="button" className="btn btn-sm preset-filled">
									Edit
								</button>
							</td>
						</tr>
					))}
				</tbody>

				<tfoot>
					<tr>
						<td colSpan={3}>
							<button
								type="button"
								className="btn btn-sm preset-filled w-full"
								onClick={onAddCrew}
							>
								Add
							</button>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
