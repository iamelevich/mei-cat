import * as v from "valibot";

/**
 * Attributes that provide x,y coordinate information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.xy.html
 */
export const AttrXySchema = v.object({
	/**
	 * Encodes an x coordinate for a feature in an output coordinate system.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.xy.html#x
	 */
	"@x": v.optional(v.number()),

	/**
	 * Encodes a y coordinate for a feature in an output coordinate system.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.xy.html#y
	 */
	"@y": v.optional(v.number()),
});

export type AttrXyData = v.InferOutput<typeof AttrXySchema>;
