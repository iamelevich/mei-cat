import * as v from "valibot";
import { AttrAdlibitumSchema } from "../attr/adlibitum";

/**
 * Attributes that define the characteristics and components of the performance resource or a performance resource list..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.basic.html
 */
export const AttrPerfResBasicSchema = v.object({
	// Inherited attribute classes
	...AttrAdlibitumSchema.entries,

	// Direct attributes
	/**
	 * Indicates the number of performers.
	 */
	"@count": v.optional(v.string()),
});

export type AttrPerfResBasicData = v.InferOutput<typeof AttrPerfResBasicSchema>;
