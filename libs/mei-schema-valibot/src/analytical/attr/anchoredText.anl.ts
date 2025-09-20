import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.anchoredText.anl.html
 */
export const AttrAnchoredTextAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrAnchoredTextAnlData = v.InferOutput<
	typeof AttrAnchoredTextAnlSchema
>;
