import { Header } from "./components/layout/Header";
import { Page } from "./components/layout/Page";

import "./App.css";

const App = () => {
	return (
		<>
			<Header />
			<Page>
				<h1>Rsbuild with React</h1>
				<p>Start building amazing things with Rsbuild.</p>
			</Page>
		</>
	);
};

export default App;
