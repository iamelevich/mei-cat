import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyAccid.ges.html
 */
export const AttrKeyAccidGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrKeyAccidGesData = v.InferOutput<typeof AttrKeyAccidGesSchema>;
