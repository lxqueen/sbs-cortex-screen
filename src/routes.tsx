import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import CrewPage from "./pages/Crew";
import MapPage from "./pages/Map";
import NotesPage from "./pages/Notes";
import RulesPage from "./pages/Rules";
import ScenePage from "./pages/Scene";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<CrewPage />} />
					<Route path="/scene" element={<ScenePage />} />
					<Route path="/map" element={<MapPage />} />
					<Route path="/rules" element={<RulesPage />} />
					<Route path="/notes" element={<NotesPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
