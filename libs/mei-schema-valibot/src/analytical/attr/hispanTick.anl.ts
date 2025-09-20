import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hispanTick.anl.html
 */
export const AttrHispanTickAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrHispanTickAnlData = v.InferOutput<
	typeof AttrHispanTickAnlSchema
>;
