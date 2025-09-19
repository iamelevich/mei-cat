import * as v from "valibot";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrTypographySchema } from "../../shared/attr/typography";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lyrics.vis.html
 */
export const AttrLyricsVisSchema = v.object({
	// Inherited attribute classes
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
});

export type AttrLyricsVisData = v.InferOutput<typeof AttrLyricsVisSchema>;
