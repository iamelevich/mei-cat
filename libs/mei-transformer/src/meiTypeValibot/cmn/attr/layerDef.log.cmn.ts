import * as v from "valibot";

/**
 * Attributes for layerDef.log.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerDef.log.cmn.html
 */
export const AttrLayerDefLogCmnSchema = v.object({
	// TODO: Add layerDef.log.cmn attributes
});

export type AttrLayerDefLogCmnData = v.InferOutput<
	typeof AttrLayerDefLogCmnSchema
>;
