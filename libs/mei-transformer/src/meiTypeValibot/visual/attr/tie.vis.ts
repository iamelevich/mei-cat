import * as v from "valibot";
import {
	AttrColorSchema,
	AttrCurvatureSchema,
	AttrLineRendBaseSchema,
	AttrVisualOffsetSchema,
	AttrVisualOffset2Schema,
	AttrXySchema,
	AttrXy2Schema,
} from "../../shared";

/**
 * Visual domain attributes. The vo attribute is the vertical offset (from its normal position) of the entire rendered tie. The startho, startvo, endho, and endvo attributes describe the horizontal and vertical offsets of the start and end points of the tie in terms of staff interline distance; that is, in units of 1/2 the distance between adjacent staff lines. Startto and endto describe the start and end points in terms of time; that is, beats..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tie.vis.html
 */
export const AttrTieVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrCurvatureSchema.entries,
	...AttrLineRendBaseSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2Schema.entries,
	...AttrXySchema.entries,
	...AttrXy2Schema.entries,
});

export type AttrTieVisData = v.InferOutput<typeof AttrTieVisSchema>;
