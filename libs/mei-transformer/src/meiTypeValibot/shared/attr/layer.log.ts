import * as v from "valibot";
import { AttrCueSchema } from "../attr/cue";
import { AttrMeterConformanceSchema } from "../attr/meterConformance";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layer.log.html
 */
export const AttrLayerLogSchema = v.object({
	// Inherited attribute classes
	...AttrCueSchema.entries,
	...AttrMeterConformanceSchema.entries,

	// Direct attributes
	/**
	 * Provides a mechanism for linking the layer to a layerDef element.
	 */
	"@def": v.optional(v.string()),
});

export type AttrLayerLogData = v.InferOutput<typeof AttrLayerLogSchema>;
