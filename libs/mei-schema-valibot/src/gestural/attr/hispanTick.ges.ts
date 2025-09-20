import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hispanTick.ges.html
 */
export const AttrHispanTickGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrHispanTickGesData = v.InferOutput<
	typeof AttrHispanTickGesSchema
>;
