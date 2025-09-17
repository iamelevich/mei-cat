import type { ValueError } from "typebox/value";

/**
 * Helper function to format validation errors for clear test output
 */
export function formatErrors(errors: Iterable<ValueError>): string {
	const errorMessages = [...errors].map(
		(error) =>
			`  - Path: ${error.path || "root"}\n    Message: ${error.message}\n    Value: ${JSON.stringify(error.value)}`,
	);
	return `Schema validation failed with ${errorMessages.length} errors:\n${errorMessages.join("\n")}`;
}
