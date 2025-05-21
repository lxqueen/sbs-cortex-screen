import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import MapPage from "./pages/Map";
import RulesPage from "./pages/Rules";
import ScenePage from "./pages/Scene";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<ScenePage />} />
					<Route path="/map" element={<MapPage />} />
					<Route path="/rules" element={<RulesPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
