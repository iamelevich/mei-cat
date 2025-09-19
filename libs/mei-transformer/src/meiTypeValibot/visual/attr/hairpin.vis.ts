import * as v from "valibot";
import {
	AttrColorSchema,
	AttrLineRendBaseSchema,
	AttrPlacementRelStaffSchema,
	AttrVerticalGroupSchema,
	AttrVisualOffsetSchema,
	AttrVisualOffset2Schema,
	AttrXySchema,
	AttrXy2Schema,
} from "../../shared";

/**
 * Visual domain attributes. The startho and startvo attributes record the horizontal and vertical offsets of the left end, endho and endvo record the horizontal and vertical offsets of the right end, and the opening attribute records the width of the opening in staff inter-line units. The x and y attributes give the absolute coordinates of the left end point, and x2 and y2 the right end point, of an imaginary line that defines the length of the hairpin and horizontally bifurcates it. The so-called "pitch" of hairpin may be controlled by use of the startho, endho, startvo, and endvo attributes, while the placement of the entire rendered mark may be controlled by use of the ho and vo attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hairpin.vis.html
 */
export const AttrHairpinVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrLineRendBaseSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2Schema.entries,
	...AttrXySchema.entries,
	...AttrXy2Schema.entries,

	// Direct attributes
	/**
	 * Indicates that the slope of the hairpin can be adjusted to follow the content in order to optimize spacing.
	 */
	"@angle.optimize": v.optional(v.string()),
	/**
	 * Applies to a "Rossini" hairpin, i.e., one where the normally open side is closed by a connecting line.
	 */
	"@closed": v.optional(v.string()),
	/**
	 * Specifies the distance between the lines at the open end of a hairpin dynamic mark.
	 */
	"@opening": v.optional(v.string()),
	/**
	 * Indicates that the opening points are aligned with an imaginary line that is always 90° perpendicular to the horizontal plane, regardless of any angle or start/end adjustments, including when the hairpin is angled with @angle.optimize or through @endvo/@startvo adjustments.
	 */
	"@opening.vertical": v.optional(v.string()),
});

export type AttrHairpinVisData = v.InferOutput<typeof AttrHairpinVisSchema>;
