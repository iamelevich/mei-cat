import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.oriscus.log.html
 */
export const AttrOriscusLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrOriscusLogData = v.InferOutput<typeof AttrOriscusLogSchema>;
