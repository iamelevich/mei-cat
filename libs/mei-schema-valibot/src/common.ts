import * as v from "valibot";

/**
 * StandardTag represents either an object with optional #text or a string.
 */
export const StandardTagSchema = v.object({
	"#text": v.optional(v.string()),
});

export type StandardTagData = v.InferOutput<typeof StandardTagSchema>;
