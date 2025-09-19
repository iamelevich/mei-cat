import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrEnclosingCharsSchema } from "../../shared/attr/enclosingChars";
import { AttrNoteHeadsSchema } from "../../shared/attr/noteHeads";
import { AttrStaffLocSchema } from "../../shared/attr/staffLoc";
import { AttrStemsSchema } from "../../shared/attr/stems";
import { AttrTypographySchema } from "../../shared/attr/typography";

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
