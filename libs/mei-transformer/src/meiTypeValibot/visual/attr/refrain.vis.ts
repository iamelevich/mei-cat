import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisualOffsetToSchema } from "../../shared/attr/visualOffset.to";
import { AttrVisualOffsetVoSchema } from "../../shared/attr/visualOffset.vo";
import { AttrVoltaGroupingSymSchema } from "../../shared/attr/voltaGroupingSym";
import { AttrXySchema } from "../../shared/attr/xy";

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
