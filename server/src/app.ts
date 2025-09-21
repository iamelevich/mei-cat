import cors from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";
import staticPlugin from "@elysiajs/static";
import { logger } from "@tqman/nice-logger";
import { Elysia } from "elysia";
import { version } from "../package.json";
import { api } from "./api";
import { isProd } from "./env";
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
	.use(betterAuth)
	.use(errorMiddleware)
	.use(api);

if (isProd) {
	app.use(
		staticPlugin({
			assets: `${import.meta.dir}/client`,
			prefix: "/",
			indexHTML: true,
		}),
	);
}
