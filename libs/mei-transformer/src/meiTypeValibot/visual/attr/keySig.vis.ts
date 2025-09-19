import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySig.vis.html
 */
export const AttrKeySigVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrVisibilitySchema.entries,

	// Direct attributes
	/**
	 * Determines where cautionary accidentals should be displayed at a key change.
	 */
	"@cancelaccid": v.optional(v.string()),
});

export type AttrKeySigVisData = v.InferOutput<typeof AttrKeySigVisSchema>;
