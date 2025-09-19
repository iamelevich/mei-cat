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
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curve.vis.html
 */
export const AttrCurveVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrCurvatureSchema.entries,
	...AttrLineRendBaseSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2Schema.entries,
	...AttrXySchema.entries,
	...AttrXy2Schema.entries,
});

export type AttrCurveVisData = v.InferOutput<typeof AttrCurveVisSchema>;
