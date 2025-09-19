import * as v from "valibot";
import { AttrMensuralVisSchema } from "../../visual";

/**
 * Visual domain attributes for the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.vis.mensural.html
 */
export const AttrStaffDefVisMensuralSchema = v.object({
	// Inherited attribute classes
	...AttrMensuralVisSchema.entries,
});

export type AttrStaffDefVisMensuralData = v.InferOutput<
	typeof AttrStaffDefVisMensuralSchema
>;
