import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrCurvatureSchema } from "../../shared/attr/curvature";
import { AttrLineRendBaseSchema } from "../../shared/attr/lineRend.base";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrVisualOffset2Schema } from "../../shared/attr/visualOffset2";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrXy2Schema } from "../../shared/attr/xy2";

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
