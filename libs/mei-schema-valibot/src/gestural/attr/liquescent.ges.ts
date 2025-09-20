import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.liquescent.ges.html
 */
export const AttrLiquescentGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLiquescentGesData = v.InferOutput<
	typeof AttrLiquescentGesSchema
>;
