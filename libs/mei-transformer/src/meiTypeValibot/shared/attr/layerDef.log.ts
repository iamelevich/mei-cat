import * as v from "valibot";
import {
	AttrDurationDefaultSchema,
	AttrOctaveDefaultSchema,
	AttrTranspositionSchema,
} from "..";
import { AttrLayerDefLogCmnSchema } from "../../cmn";

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
