import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerDef.anl.html
 */
export const AttrLayerDefAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLayerDefAnlData = v.InferOutput<typeof AttrLayerDefAnlSchema>;
