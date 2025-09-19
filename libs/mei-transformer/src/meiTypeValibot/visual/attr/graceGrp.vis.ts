import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graceGrp.vis.html
 */
export const AttrGraceGrpVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
});

export type AttrGraceGrpVisData = v.InferOutput<typeof AttrGraceGrpVisSchema>;
