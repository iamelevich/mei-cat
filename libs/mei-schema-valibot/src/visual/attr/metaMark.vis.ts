import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrVerticalGroupSchema } from "../../shared/attr/verticalGroup";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metaMark.vis.html
 */
export const AttrMetaMarkVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrVerticalGroupSchema.entries,
});

export type AttrMetaMarkVisData = v.InferOutput<typeof AttrMetaMarkVisSchema>;
