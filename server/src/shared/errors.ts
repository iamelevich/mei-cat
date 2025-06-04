/**
 * Base class for all MeiCat errors.
 */
export class MeiCatError extends Error {
	name = "MeiCatError";

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
export class MeiFileDownloadError extends MeiCatError {
	name = "MeiFileDownloadError";
}

/**
 * Error thrown when a MEI file has an invalid content type.
 */
export class MeiFileInvalidContentTypeError extends MeiCatError {
	name = "MeiFileInvalidContentTypeError";
}
