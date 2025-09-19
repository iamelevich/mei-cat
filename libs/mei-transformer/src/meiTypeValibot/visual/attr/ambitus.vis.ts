import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambitus.vis.html
 */
export const AttrAmbitusVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrAmbitusVisData = v.InferOutput<typeof AttrAmbitusVisSchema>;
