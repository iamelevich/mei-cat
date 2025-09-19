import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrPlacementRelStaffSchema,
	AttrTypographySchema,
	AttrVerticalGroupSchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermata.vis.html
 */
export const AttrFermataVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Describes the visual appearance of the fermata; that is, whether it occurs as upright or inverted.
	 */
	"@form": v.optional(v.string()),
	/**
	 * Describes the visual appearance of the fermata; that is, whether it has a curved, square, or angular shape.
	 */
	"@shape": v.optional(v.string()),
});

export type AttrFermataVisData = v.InferOutput<typeof AttrFermataVisSchema>;
