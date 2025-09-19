import * as v from "valibot";
import { AttrBeamingLogSchema } from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerDef.log.cmn.html
 */
export const AttrLayerDefLogCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamingLogSchema.entries,
});

export type AttrLayerDefLogCmnData = v.InferOutput<
	typeof AttrLayerDefLogCmnSchema
>;
