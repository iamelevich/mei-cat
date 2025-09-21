import { t } from "elysia";
import { StatusCodes } from "http-status-codes";

/**
 * Base class for all MeiCat errors.
 */
export class APIError extends Error {
	public readonly message: string;
	public readonly httpCode: StatusCodes;

	constructor(httpCode: StatusCodes, message: string, options?: ErrorOptions) {
		super(message, options);

		this.httpCode = httpCode;
		this.message = message;
		this.name = "APIError";

		Object.setPrototypeOf(this, APIError.prototype);
		Error.captureStackTrace(this);
	}

	toJSON() {
		return {
			name: this.name,
			message: this.message,
			cause: this.cause,
		};
	}
}

/**
 * Error thrown when a MEI file download fails.
 */
export class APIFileDownloadError extends APIError {
	constructor(message: string, options?: ErrorOptions) {
		super(StatusCodes.BAD_REQUEST, message, options);

		this.name = "APIFileDownloadError";
	}
}

/**
 * Error thrown when a MEI file has an invalid content type.
 */
export class APIInvalidContentTypeError extends APIError {
	constructor(message: string, options?: ErrorOptions) {
		super(StatusCodes.UNSUPPORTED_MEDIA_TYPE, message, options);

		this.name = "APIInvalidContentTypeError";
	}
}

/**
 * Error thrown when a entity already exists in the database.
 */
export class APIAlreadyExistsError extends APIError {
	constructor(message: string, options?: ErrorOptions) {
		super(StatusCodes.CONFLICT, message, options);

		this.name = "APIAlreadyExistsError";
	}
}

/**
 * Error thrown when a entity is not found in the database.
 */
export class APINotFoundError extends APIError {
	constructor(message: string, options?: ErrorOptions) {
		super(StatusCodes.NOT_FOUND, message, options);

		this.name = "APINotFoundError";
	}
}

/**
 * Error thrown when a validation error occurs.
 */
export class APIValidationError extends APIError {
	constructor(message: string, options?: ErrorOptions) {
		super(StatusCodes.BAD_REQUEST, message, options);

		this.name = "APIValidationError";
	}
}

/**
 * Common error response schema.
 */
export const ErrorResponseSchema = t.Object({
	name: t.String({
		description: "Error name describing what went wrong",
	}),
	message: t.String({
		description: "Error message describing what went wrong",
	}),
	cause: t.Optional(
		t.Object(
			{
				name: t.String({
					description: "Error name describing what went wrong",
				}),
				message: t.String({
					description: "Error message describing what went wrong",
				}),
			},
			{ description: "Additional error details or cause" },
		),
	),
});
