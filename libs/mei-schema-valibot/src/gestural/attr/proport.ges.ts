import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.proport.ges.html
 */
export const AttrProportGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrProportGesData = v.InferOutput<typeof AttrProportGesSchema>;
