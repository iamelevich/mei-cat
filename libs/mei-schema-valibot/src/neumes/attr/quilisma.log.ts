import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.quilisma.log.html
 */
export const AttrQuilismaLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrQuilismaLogData = v.InferOutput<typeof AttrQuilismaLogSchema>;
