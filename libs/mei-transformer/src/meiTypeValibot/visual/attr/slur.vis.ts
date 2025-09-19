import * as v from "valibot";
import {
	AttrColorSchema,
	AttrCurvatureSchema,
	AttrLineRendBaseSchema,
	AttrVisualOffset2Schema,
	AttrVisualOffsetSchema,
	AttrXy2Schema,
	AttrXySchema,
} from "../../shared";

/**
 * Visual domain attributes for slur. The vo attribute is the vertical offset (from its normal position) of the entire rendered slur/phrase mark..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slur.vis.html
 */
export const AttrSlurVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrCurvatureSchema.entries,
	...AttrLineRendBaseSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2Schema.entries,
	...AttrXySchema.entries,
	...AttrXy2Schema.entries,
});

export type AttrSlurVisData = v.InferOutput<typeof AttrSlurVisSchema>;
