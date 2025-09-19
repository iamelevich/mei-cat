import * as v from "valibot";
import { AttrNoteVisCmnSchema } from "../../cmn";
import { AttrExtSymSchema } from "../../externalsymbols";
import { AttrNoteVisMensuralSchema } from "../../mensural";
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
import { AttrAltSymSchema } from "../../usersymbols";

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
