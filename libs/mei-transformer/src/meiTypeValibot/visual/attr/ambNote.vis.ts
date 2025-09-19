import * as v from "valibot";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrNoteHeadsSchema,
	AttrStaffLocSchema,
	AttrStemsSchema,
	AttrTypographySchema,
} from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambNote.vis.html
 */
export const AttrAmbNoteVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrNoteHeadsSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrStemsSchema.entries,
	...AttrTypographySchema.entries,
});

export type AttrAmbNoteVisData = v.InferOutput<typeof AttrAmbNoteVisSchema>;
