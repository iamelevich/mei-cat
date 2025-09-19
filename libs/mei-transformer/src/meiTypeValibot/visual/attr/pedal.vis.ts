import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols";
import {
	AttrColorSchema,
	AttrLineRendSchema,
	AttrPlacementRelStaffSchema,
	AttrTypographySchema,
	AttrVerticalGroupSchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

/**
 * Visual domain attributes. The place attribute captures the placement of the pedal marking with respect to the staff with which it is associated. Modern publishing standards require the place to be <val>below</val>; however, for transcriptions of manuscript works, this attribute class allows the full range of values..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pedal.vis.html
 */
export const AttrPedalVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrLineRendSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Determines whether piano pedal marks should be rendered as lines or as terms.
	 */
	"@form": v.optional(v.string()),
});

export type AttrPedalVisData = v.InferOutput<typeof AttrPedalVisSchema>;
