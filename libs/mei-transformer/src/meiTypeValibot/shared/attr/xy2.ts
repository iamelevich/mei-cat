import * as v from "valibot";

/**
 * Output coordinate attributes. Some elements may need 2 coordinate pairs to record their rendered *output* coordinates. The attributes indicate where to place the rendered output. Recording the coordinates of a feature in a facsimile requires the use of the facs attribute..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.xy2.html
 */
export const AttrXy2Schema = v.object({
	// Direct attributes
	/**
	 * Encodes the optional 2nd x coordinate.
	 */
	"@x2": v.optional(v.string()),
	/**
	 * Encodes the optional 2nd y coordinate.
	 */
	"@y2": v.optional(v.string()),
});

export type AttrXy2Data = v.InferOutput<typeof AttrXy2Schema>;
