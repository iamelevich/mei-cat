import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
      "/openapi": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
		},
  },
	plugins: [
		tanstackRouter({ autoCodeSplitting: true }),
		viteReact(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
  build: {
    outDir: "../dist/client",
  },
});
