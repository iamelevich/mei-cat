import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.liquescent.log.html
 */
export const AttrLiquescentLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLiquescentLogData = v.InferOutput<
	typeof AttrLiquescentLogSchema
>;
