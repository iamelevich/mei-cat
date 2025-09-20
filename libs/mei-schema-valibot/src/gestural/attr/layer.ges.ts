import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layer.ges.html
 */
export const AttrLayerGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLayerGesData = v.InferOutput<typeof AttrLayerGesSchema>;
