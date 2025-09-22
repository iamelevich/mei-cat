import { Value } from "@sinclair/typebox/value";
import Elysia, { file } from "elysia";
import { StatusCodes } from "http-status-codes";
import { env } from "../env";
import { APIError, ErrorResponseSchema } from "../shared/errors";

export const errorMiddleware = new Elysia({ name: "error" })
	.error({ APIError })
	.onError({ as: "global" }, ({ error, request, set, code }) => {
		// captureException(error);

		let message = "Unknown error";
		let name: string = code as string;
		set.status = StatusCodes.INTERNAL_SERVER_ERROR;

		switch (code) {
			case "NOT_FOUND": {
				const url = new URL(request.url);
				if (
					env.NODE_ENV === "production" &&
					request.method === "GET" &&
					!url.pathname.startsWith("/api")
				) {
					console.log(
						` ✗ Looks like client route (${url.pathname}). Returning ${import.meta.dir}/client/index.html`,
					);
					return file(`${import.meta.dir}/client/index.html`);
				}
				set.status = StatusCodes.NOT_FOUND;
				message = `${request.method} ${request.url} is not a valid endpoint.`;
				break;
			}
			case "PARSE":
				set.status = error.status;
				message = error.message;
				break;
			case "VALIDATION":
				set.status = error.status;
				// NOTE: You might want to change how these get returned to handle all possible typebox error states
				message = error.all[0].summary ?? "Validation error";
				break;
			case "APIError":
				set.status = error.httpCode;
				message = error.message;
				name = error.name;
				break;
			default:
				console.error("Unknown error", error);
				break;
		}

		const response = Value.Parse(ErrorResponseSchema, {
			name,
			message,
			cause:
				"cause" in error && error.cause instanceof Error
					? {
							name: error.cause.name,
							message: error.cause.message,
						}
					: undefined,
		});

		return Response.json(response, { status: set.status });
	});
