import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambitus.ges.html
 */
export const AttrAmbitusGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrAmbitusGesData = v.InferOutput<typeof AttrAmbitusGesSchema>;
