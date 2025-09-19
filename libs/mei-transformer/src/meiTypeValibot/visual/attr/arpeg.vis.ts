import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrLineRendBaseSchema,
	AttrTypographySchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.arpeg.vis.html
 */
export const AttrArpegVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrLineRendBaseSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Indicates if an arrowhead is to be drawn as part of the arpeggiation symbol.
	 */
	"@arrow": v.optional(v.string()),
	/**
	 * Captures the overall color of the arrow.
	 */
	"@arrow.color": v.optional(v.string()),
	/**
	 * Captures the fill color of the arrow if different from the line color.
	 */
	"@arrow.fillcolor": v.optional(v.string()),
	/**
	 * Symbol rendered at end of the line.
	 */
	"@arrow.shape": v.optional(v.string()),
	/**
	 * Holds the relative size of the arrow symbol.
	 */
	"@arrow.size": v.optional(v.string()),
});

export type AttrArpegVisData = v.InferOutput<typeof AttrArpegVisSchema>;
