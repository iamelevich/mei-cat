import * as v from "valibot";

/**
 * This attribute class records the upper left position of a feature within a two-dimensional coordinate system..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.ul.html
 */
export const AttrCoordinatedUlSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the upper-left corner x coordinate.
	 */
	"@ulx": v.optional(v.string()),
	/**
	 * Indicates the upper-left corner y coordinate.
	 */
	"@uly": v.optional(v.string()),
});

export type AttrCoordinatedUlData = v.InferOutput<
	typeof AttrCoordinatedUlSchema
>;
