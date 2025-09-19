import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambitus.log.html
 */
export const AttrAmbitusLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrAmbitusLogData = v.InferOutput<typeof AttrAmbitusLogSchema>;
