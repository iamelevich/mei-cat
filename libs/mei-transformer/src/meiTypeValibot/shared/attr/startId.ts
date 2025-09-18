import * as v from "valibot";

/**
 * Attributes that identify a relative starting point.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.startId.html
 */
export const AttrStartIdSchema = v.object({
	/**
	 * Holds a reference to the first element in a sequence of events to which the feature applies.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.startId.html#startid
	 */
	"@startid": v.optional(v.string()),
});

export type AttrStartIdData = v.InferOutput<typeof AttrStartIdSchema>;
