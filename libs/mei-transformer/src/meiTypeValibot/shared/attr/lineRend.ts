import * as v from "valibot";
import { AttrLineRendBaseSchema } from "..";

/**
 * Attributes that record the visual rendition of lines..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lineRend.html
 */
export const AttrLineRendSchema = v.object({
	// Inherited attribute classes
	...AttrLineRendBaseSchema.entries,

	// Direct attributes
	/**
	 * Symbol rendered at end of line.
	 */
	"@lendsym": v.optional(v.string()),
	/**
	 * Holds the relative size of the line-end symbol.
	 */
	"@lendsym.size": v.optional(v.string()),
	/**
	 * Symbol rendered at start of line.
	 */
	"@lstartsym": v.optional(v.string()),
	/**
	 * Holds the relative size of the line-start symbol.
	 */
	"@lstartsym.size": v.optional(v.string()),
});

export type AttrLineRendData = v.InferOutput<typeof AttrLineRendSchema>;
