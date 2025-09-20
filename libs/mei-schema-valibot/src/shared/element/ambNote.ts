import * as v from "valibot";
import { AttrAmbNoteAnlSchema } from "../../analytical/attr/ambNote.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrAmbNoteGesSchema } from "../../gestural/attr/ambNote.ges";
import { AttrAmbNoteVisSchema } from "../../visual/attr/ambNote.vis";
import { AttrAmbNoteLogSchema } from "../attr/ambNote.log";
import { AttrCommonSchema } from "../attr/common";

/**
 * Base schema with attribute, to simplify types for AmbNoteSchema
 */
const AmbNoteBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAmbNoteAnlSchema.entries,
	...AttrAmbNoteGesSchema.entries,
	...AttrAmbNoteLogSchema.entries,
	...AttrAmbNoteVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Highest or lowest pitch in a score, staff, or layer.
 * @see https://music-encoding.org/guidelines/v5/elements/ambNote.html
 */
export const AmbNoteSchema = v.lazy(() => v.intersect([AmbNoteBaseSchema]));

export type AmbNoteData = v.InferOutput<typeof AmbNoteSchema>;
