import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrExtenderSchema } from "../../shared/attr/extender";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrVerticalGroupSchema } from "../../shared/attr/verticalGroup";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrVisualOffset2HoSchema } from "../../shared/attr/visualOffset2.ho";
import { AttrVisualOffset2ToSchema } from "../../shared/attr/visualOffset2.to";
import { AttrXySchema } from "../../shared/attr/xy";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacca.vis.html
 */
export const AttrAttaccaVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrExtenderSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2HoSchema.entries,
	...AttrVisualOffset2ToSchema.entries,
	...AttrXySchema.entries,
});

export type AttrAttaccaVisData = v.InferOutput<typeof AttrAttaccaVisSchema>;
