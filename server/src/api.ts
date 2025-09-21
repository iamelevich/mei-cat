import Elysia from "elysia";
import { meiRoutes } from "./routes/mei";

export const api = new Elysia({
	prefix: "/api",
})
	.get("/health", () => {
		return { status: "ok" };
	})
	.use(meiRoutes);
