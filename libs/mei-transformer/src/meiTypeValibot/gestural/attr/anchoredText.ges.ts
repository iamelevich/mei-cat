import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.anchoredText.ges.html
 */
export const AttrAnchoredTextGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrAnchoredTextGesData = v.InferOutput<
	typeof AttrAnchoredTextGesSchema
>;
