import * as v from "valibot";

/**
 * Output coordinate attributes. Some elements may have their exact rendered *output* coordinates recorded. x and y attributes indicate where to place the rendered output. Recording the coordinates of a feature in a facsimile requires the use of the facs attribute..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.xy.html
 */
export const AttrXySchema = v.object({
	// Direct attributes
	/**
	 * Encodes an x coordinate for a feature in an output coordinate system. When it is necessary to record the placement of a feature in a facsimile image, use the facs attribute.
	 */
	"@x": v.optional(v.string()),
	/**
	 * Encodes a y coordinate for a feature in an output coordinate system. When it is necessary to record the placement of a feature in a facsimile image, use the facs attribute.
	 */
	"@y": v.optional(v.string()),
});

export type AttrXyData = v.InferOutput<typeof AttrXySchema>;
