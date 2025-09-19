import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrVisibilitySchema,
	AttrWidthSchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.vis.html
 */
export const AttrBarLineVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrWidthSchema.entries,

	// Direct attributes
	/**
	 * States the length of bar lines in virtual units. The value must be greater than 0 and is typically equal to 2 times (the number of staff lines - 1); <abbr>e.g.</abbr>, a value of <val>8</val> for a 5-line staff.
	 */
	"@len": v.optional(v.string()),
	/**
	 * Records the method of barring.
	 */
	"@method": v.optional(v.string()),
	/**
	 * Denotes the staff location of the bar line if its length is non-standard.
	 */
	"@place": v.optional(v.string()),
});

export type AttrBarLineVisData = v.InferOutput<typeof AttrBarLineVisSchema>;
