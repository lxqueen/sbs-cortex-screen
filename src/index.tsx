import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";

const rootEl = document.getElementById("app");

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);

	root.render(
		<React.StrictMode>
			<Router />
		</React.StrictMode>,
	);
}
