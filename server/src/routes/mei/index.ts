import Elysia from "elysia";
import { errorMiddleware } from "../../middleware/error";
import { meiAddRoutes } from "./add";
import { meiDeleteRoutes } from "./delete";
import { meiDownloadRoutes } from "./download";
import { meiListRoutes } from "./list";

export const meiRoutes = new Elysia({ prefix: "/mei" })
	.use(errorMiddleware)
	.use(meiListRoutes)
	.use(meiAddRoutes)
	.use(meiDownloadRoutes)
	.use(meiDeleteRoutes);
