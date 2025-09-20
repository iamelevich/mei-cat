import * as v from "valibot";
import { AttrMeterConformanceBarSchema } from "./meterConformance.bar";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.log.html
 */
export const AttrBarLineLogSchema = v.object({
	// Inherited attribute classes
	...AttrMeterConformanceBarSchema.entries,

	// Direct attributes
	/**
	 * Records the appearance and usually the function of the bar line.
	 */
	"@form": v.optional(v.string()),
});

export type AttrBarLineLogData = v.InferOutput<typeof AttrBarLineLogSchema>;
