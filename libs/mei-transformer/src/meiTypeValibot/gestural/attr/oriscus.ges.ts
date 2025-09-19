import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.oriscus.ges.html
 */
export const AttrOriscusGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrOriscusGesData = v.InferOutput<typeof AttrOriscusGesSchema>;
