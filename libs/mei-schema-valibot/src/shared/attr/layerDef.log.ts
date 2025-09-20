import * as v from "valibot";
import { AttrLayerDefLogCmnSchema } from "../../cmn/attr/layerDef.log.cmn";
import { AttrDurationDefaultSchema } from "./duration.default";
import { AttrOctaveDefaultSchema } from "./octaveDefault";
import { AttrTranspositionSchema } from "./transposition";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerDef.log.html
 */
export const AttrLayerDefLogSchema = v.object({
	// Inherited attribute classes
	...AttrDurationDefaultSchema.entries,
	...AttrLayerDefLogCmnSchema.entries,
	...AttrOctaveDefaultSchema.entries,
	...AttrTranspositionSchema.entries,
});

export type AttrLayerDefLogData = v.InferOutput<typeof AttrLayerDefLogSchema>;
