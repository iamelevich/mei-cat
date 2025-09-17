import * as v from "valibot";

/**
 * Attributes that provide coordinate information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html
 */
export const AttrCoordinatedSchema = v.object({
	/**
	 * Encodes the upper left corner x coordinate for a feature in an output coordinate system.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html#ulx
	 */
	"@ulx": v.optional(v.number()),

	/**
	 * Encodes the upper left corner y coordinate for a feature in an output coordinate system.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html#uly
	 */
	"@uly": v.optional(v.number()),

	/**
	 * Encodes the lower right corner x coordinate for a feature in an output coordinate system.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html#lrx
	 */
	"@lrx": v.optional(v.number()),

	/**
	 * Encodes the lower right corner y coordinate for a feature in an output coordinate system.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html#lry
	 */
	"@lry": v.optional(v.number()),
});

export type AttrCoordinatedData = v.InferOutput<typeof AttrCoordinatedSchema>;
