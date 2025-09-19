import * as v from "valibot";
import { AttrColorSchema } from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ligature.vis.html
 */
export const AttrLigatureVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,

	// Direct attributes
	/**
	 * Provides an indication of the function of the ligature.
	 */
	"@form": v.optional(v.string()),
});

export type AttrLigatureVisData = v.InferOutput<typeof AttrLigatureVisSchema>;
