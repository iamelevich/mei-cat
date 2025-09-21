import Elysia, { t } from "elysia";
import {
	MeiCatGrabberResultSchema,
	meiCatGrabberService,
} from "../../services/meiCatGrabber";
import { ErrorResponseSchema } from "../../shared/errors";

// Request schema
const parseCatalogRequest = t.Object({
	url: t.String({
		format: "uri",
		description: "URL of the MEI Cat index page (must end with /index.xq)",
	}),
	timeout: t.Optional(
		t.Number({
			minimum: 1000,
			maximum: 60000,
			description: "Request timeout in milliseconds (default: 5000)",
		}),
	),
	itemsPerPage: t.Optional(
		t.Number({
			minimum: 1,
			maximum: 10000,
			description: "Number of items per page to fetch (default: 5000)",
		}),
	),
});

export const meiParseCatalogRoutes = new Elysia({})
	.use(meiCatGrabberService)
	.post(
		"/parse-catalog",
		async ({ body, meiCatGrabberService }) => {
			const options = {
				timeout: body.timeout ?? 5000,
				itemsPerPage: body.itemsPerPage ?? 5000,
			};

			return meiCatGrabberService.fromUrl(body.url, options);
		},
		{
			body: parseCatalogRequest,
			response: {
				200: MeiCatGrabberResultSchema,
				400: ErrorResponseSchema,
				500: ErrorResponseSchema,
			},
			detail: {
				summary: "Parse MEI Cat catalog",
				description:
					"Parse a MEI Cat catalog index page to extract XML download URLs. Fetches the catalog page, extracts document paths, and then fetches each document page to find XML download links. Returns absolute URLs and comprehensive statistics.",
				tags: ["MEI Files"],
			},
		},
	);
