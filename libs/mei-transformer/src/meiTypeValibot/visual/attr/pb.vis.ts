import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pb.vis.html
 */
export const AttrPbVisSchema = v.object({
	// Direct attributes
	/**
	 * States the side of a leaf (as in a manuscript) on which the content following the <gi scheme="MEI">pb</gi> element occurs.
	 */
	"@folium": v.optional(v.string()),
});

export type AttrPbVisData = v.InferOutput<typeof AttrPbVisSchema>;
