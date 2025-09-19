import * as v from "valibot";
import { AttrTranspositionSchema } from "../../shared/attr/transposition";
import { AttrPerfResBasicSchema } from "../attr/perfRes.basic";

/**
 * Attributes that define the characteristics and components of the performance resource..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.html
 */
export const AttrPerfResSchema = v.object({
	// Inherited attribute classes
	...AttrPerfResBasicSchema.entries,
	...AttrTranspositionSchema.entries,

	// Direct attributes
	/**
	 * Use this attribute to identify the performance resource as a soloist especially in an accompanied work, such as a concerto or vocal solo.
	 */
	"@solo": v.optional(v.string()),
});

export type AttrPerfResData = v.InferOutput<typeof AttrPerfResSchema>;
