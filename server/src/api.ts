import Elysia from "elysia";
import { meiRoutes } from "./routes/mei";
import { todosRoutes } from "./routes/todos";

export const api = new Elysia({
	prefix: "/api",
})
	.use(todosRoutes)
	.use(meiRoutes);
