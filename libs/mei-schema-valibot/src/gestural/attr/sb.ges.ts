import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sb.ges.html
 */
export const AttrSbGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSbGesData = v.InferOutput<typeof AttrSbGesSchema>;
