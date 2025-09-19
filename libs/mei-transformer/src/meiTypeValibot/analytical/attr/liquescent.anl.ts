import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.liquescent.anl.html
 */
export const AttrLiquescentAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLiquescentAnlData = v.InferOutput<
	typeof AttrLiquescentAnlSchema
>;
