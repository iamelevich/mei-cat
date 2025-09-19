import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrCurvatureSchema } from "../../shared/attr/curvature";
import { AttrLineRendBaseSchema } from "../../shared/attr/lineRend.base";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrVisualOffset2Schema } from "../../shared/attr/visualOffset2";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrXy2Schema } from "../../shared/attr/xy2";

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
