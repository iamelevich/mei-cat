import Elysia from "elysia";
import { meiAddRoutes } from "./add";
import { meiDownloadRoutes } from "./download";
import { meiListRoutes } from "./list";

export const meiRoutes = new Elysia({ prefix: "/mei" })
	.use(meiListRoutes)
	.use(meiAddRoutes)
	.use(meiDownloadRoutes);
