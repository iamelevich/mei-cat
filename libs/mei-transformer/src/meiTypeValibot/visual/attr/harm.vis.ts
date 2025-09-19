import * as v from "valibot";
import {
	AttrColorSchema,
	AttrExtenderSchema,
	AttrPlacementRelStaffSchema,
	AttrVerticalGroupSchema,
	AttrVisualOffset2HoSchema,
	AttrVisualOffset2ToSchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harm.vis.html
 */
export const AttrHarmVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrExtenderSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2HoSchema.entries,
	...AttrVisualOffset2ToSchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Describes how the harmonic indication should be rendered.
	 */
	"@rendgrid": v.optional(v.string()),
});

export type AttrHarmVisData = v.InferOutput<typeof AttrHarmVisSchema>;
