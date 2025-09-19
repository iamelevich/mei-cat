import * as v from "valibot";

/**
 * Visual domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.guitarGrid.vis.html
 */
export const AttrGuitarGridVisSchema = v.object({
	// Direct attributes
	/**
	 * Determines whether to display guitar chord grids.
	 */
	"@grid.show": v.optional(v.string()),
});

export type AttrGuitarGridVisData = v.InferOutput<
	typeof AttrGuitarGridVisSchema
>;
