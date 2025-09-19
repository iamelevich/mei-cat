import * as v from "valibot";

/**
 * Attributes recording the identifiers of the first and last elements of a sequence of distant elements..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.origin.startEndId.html
 */
export const AttrOriginStartEndIdSchema = v.object({
	// Direct attributes
	/**
	 * indicates the final element in a sequence of events.
	 */
	"@origin.endid": v.optional(v.string()),
	/**
	 * indicates the first element in a sequence of events.
	 */
	"@origin.startid": v.optional(v.string()),
});

export type AttrOriginStartEndIdData = v.InferOutput<
	typeof AttrOriginStartEndIdSchema
>;
