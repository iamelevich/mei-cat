import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrVisualOffset2Schema } from "../../shared/attr/visualOffset2";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrXy2Schema } from "../../shared/attr/xy2";

/**
 * Attributes for describing the visual appearance of a line..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.line.vis.html
 */
export const AttrLineVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2Schema.entries,
	...AttrXySchema.entries,
	...AttrXy2Schema.entries,

	// Direct attributes
	/**
	 * Symbol rendered at end of line.
	 */
	"@endsym": v.optional(v.string()),
	/**
	 * Holds the relative size of the line-end symbol.
	 */
	"@endsym.size": v.optional(v.string()),
	/**
	 * Visual form of the line.
	 */
	"@form": v.optional(v.string()),
	/**
	 * Stores the number of segments used to render a dashed, dotted, or wavy line.
	 */
	"@segments": v.optional(v.string()),
	/**
	 * Symbol rendered at start of line.
	 */
	"@startsym": v.optional(v.string()),
	/**
	 * Holds the relative size of the line-start symbol.
	 */
	"@startsym.size": v.optional(v.string()),
	/**
	 * Captures the wave height of a wavy line.
	 */
	"@waveheight": v.optional(v.string()),
	/**
	 * Width of the line.
	 */
	"@width": v.optional(v.string()),
});

export type AttrLineVisData = v.InferOutput<typeof AttrLineVisSchema>;
