import Elysia from "elysia";
import { meiRoutes } from "./routes/mei";

export const api = new Elysia({
	prefix: "/api",
})
	.get(
		"/health",
		() => {
			return { status: "ok" };
		},
		{
			detail: {
				summary: "Health check",
				description: "Check if the API is running",
				tags: ["Health"],
			},
		},
	)
	.use(meiRoutes);
