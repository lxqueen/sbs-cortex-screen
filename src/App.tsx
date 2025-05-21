import { Outlet } from "react-router";
import { Backdrop } from "./components/layout/Backdrop";
import { Header } from "./components/layout/Header";

import "./App.css";

const App = () => {
	return (
		<>
			<Backdrop />
			<Header />
			<Outlet />
		</>
	);
};

export default App;
