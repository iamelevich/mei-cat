import * as v from "valibot";
import { AttrInstrumentIdentSchema } from "../../midi";
import { AttrTuningSchema } from "../../shared";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerDef.ges.html
 */
export const AttrLayerDefGesSchema = v.object({
	// Inherited attribute classes
	...AttrInstrumentIdentSchema.entries,
	...AttrTuningSchema.entries,
});

export type AttrLayerDefGesData = v.InferOutput<typeof AttrLayerDefGesSchema>;
