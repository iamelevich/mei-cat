import * as v from "valibot";
import {
	AttrColorSchema,
	AttrPlacementRelStaffSchema,
	AttrTypographySchema,
	AttrVisualOffsetToSchema,
	AttrVisualOffsetVoSchema,
	AttrVoltaGroupingSymSchema,
	AttrXySchema,
} from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.refrain.vis.html
 */
export const AttrRefrainVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetToSchema.entries,
	...AttrVisualOffsetVoSchema.entries,
	...AttrVoltaGroupingSymSchema.entries,
	...AttrXySchema.entries,
});

export type AttrRefrainVisData = v.InferOutput<typeof AttrRefrainVisSchema>;
