import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrCurvatureSchema } from "../../shared/attr/curvature";
import { AttrLineRendBaseSchema } from "../../shared/attr/lineRend.base";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrVisualOffset2Schema } from "../../shared/attr/visualOffset2";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrXy2Schema } from "../../shared/attr/xy2";

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
