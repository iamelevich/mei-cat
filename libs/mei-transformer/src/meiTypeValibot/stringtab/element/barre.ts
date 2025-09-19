import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrStartEndIdSchema } from "../../shared";

/**
 * Base schema with attribute, to simplify types for BarreSchema
 */
const BarreBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrStartEndIdSchema.entries,

	// Direct attributes
	/**
	 * This attribute is deprecated in favor of <att>tab.fret</att>, and will be removed in a future version. Records the location at which the strings should be stopped against a fret in a fretboard diagram. This may or may not be the same as the actual location on the fretboard of the instrument in performance.
	 */
	"@fret": v.optional(v.string()),
});

/**
 * A barre in a chord tablature grid.
 * @see https://music-encoding.org/guidelines/v5/elements/barre.html
 */
export const BarreSchema = v.intersect([BarreBaseSchema]);

export type BarreData = v.InferOutput<typeof BarreSchema>;
