import cors from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";
import staticPlugin from "@elysiajs/static";
import { logger } from "@tqman/nice-logger";
import { Elysia } from "elysia";
import { version } from "../package.json";
import { api } from "./api";
import { env } from "./env";
import { OpenAPI } from "./lib/auth";
import { betterAuth } from "./middleware/auth";
import { errorMiddleware } from "./middleware/error";

export const app = new Elysia()
	.use(
		openapi({
			// Can be accessed at /openapi
			documentation: {
				info: {
					title: "MEI Cat API",
					version,
				},
				components: await OpenAPI.components,
				paths: await OpenAPI.getPaths(),
			},
		}),
	)
	.use(cors())
	.use(logger())
	.use(errorMiddleware)
	.use(api);

if (env.NODE_ENV === "production") {
	const assetsPath = `${import.meta.dir}/client`;
	console.log(
		`This is production. Enabling static plugin for path ${assetsPath}`,
	);

	// Use static plugin with ignorePatterns to exclude /api routes
	app.use(
		staticPlugin({
			assets: assetsPath,
			prefix: "/",
			indexHTML: true,
		}),
	);
} else {
	console.log(`This is development. No static plugin will be used.`);
	console.log(`Environment variables: ${JSON.stringify(process.env, null, 2)}`);
	console.log(`Parsed environment variables: ${JSON.stringify(env, null, 2)}`);
}

app.use(betterAuth);
