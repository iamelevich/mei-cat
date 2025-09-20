import * as v from "valibot";
import { AttrNoteVisCmnSchema } from "../../cmn/attr/note.vis.cmn";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrNoteVisMensuralSchema } from "../../mensural/attr/note.vis.mensural";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrEnclosingCharsSchema } from "../../shared/attr/enclosingChars";
import { AttrNoteHeadsSchema } from "../../shared/attr/noteHeads";
import { AttrStaffLocSchema } from "../../shared/attr/staffLoc";
import { AttrStemsSchema } from "../../shared/attr/stems";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";
import { AttrVisualOffsetHoSchema } from "../../shared/attr/visualOffset.ho";
import { AttrVisualOffsetToSchema } from "../../shared/attr/visualOffset.to";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

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
