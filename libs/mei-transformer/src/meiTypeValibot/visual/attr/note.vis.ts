import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrNoteHeadsSchema,
	AttrStaffLocSchema,
	AttrStemsSchema,
	AttrTypographySchema,
	AttrVisibilitySchema,
	AttrVisualOffsetHoSchema,
	AttrVisualOffsetToSchema,
	AttrXySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";
import { AttrNoteVisCmnSchema } from "../../cmn";
import { AttrNoteVisMensuralSchema } from "../../mensural";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.vis.html
 */
export const AttrNoteVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrNoteVisCmnSchema.entries,
	...AttrNoteVisMensuralSchema.entries,
	...AttrNoteHeadsSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrStemsSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrVisualOffsetToSchema.entries,
	...AttrXySchema.entries,
});

export type AttrNoteVisData = v.InferOutput<typeof AttrNoteVisSchema>;
