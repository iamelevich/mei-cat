import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.strophicus.ges.html
 */
export const AttrStrophicusGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStrophicusGesData = v.InferOutput<
	typeof AttrStrophicusGesSchema
>;
