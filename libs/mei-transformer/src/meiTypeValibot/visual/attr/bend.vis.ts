import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrCurvatureSchema } from "../../shared/attr/curvature";
import { AttrLineRendBaseSchema } from "../../shared/attr/lineRend.base";
import { AttrVerticalGroupSchema } from "../../shared/attr/verticalGroup";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrVisualOffset2Schema } from "../../shared/attr/visualOffset2";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrXy2Schema } from "../../shared/attr/xy2";

/**
 * Visual domain attributes. If the bulge or bezier attributes are present, the bend should be rendered as a curve. Otherwise, it should be rendered using lines. The ho and vo attributes describe the visual offset of the entire rendered bend. The endho, endvo and startho, startvo attribute pairs may be used to encode start and end points relative to their programmatic placement. For exact placement of the endpoints of the bend, use the x and y attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bend.vis.html
 */
export const AttrBendVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrCurvatureSchema.entries,
	...AttrLineRendBaseSchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2Schema.entries,
	...AttrXySchema.entries,
	...AttrXy2Schema.entries,
});

export type AttrBendVisData = v.InferOutput<typeof AttrBendVisSchema>;
