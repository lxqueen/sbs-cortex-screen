import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	html: {
		mountId: "app",
		template: "./src/template.html",
		title: "Swashbucklers by Starlight",
	},
});
