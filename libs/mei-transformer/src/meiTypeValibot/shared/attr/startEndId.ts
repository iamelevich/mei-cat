import * as v from "valibot";
import { AttrStartIdSchema } from "./startId";

/**
 * Attributes recording the identifiers of the first and last elements of a sequence of elements to which the current element is associated.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.startEndId.html
 */
export const AttrStartEndIdSchema = v.object({
	...AttrStartIdSchema.entries,

	/**
	 * Indicates the final element in a sequence of events to which the feature applies.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.startEndId.html#endid
	 */
	"@endid": v.optional(v.string()),
});

export type AttrStartEndIdData = v.InferOutput<typeof AttrStartEndIdSchema>;
