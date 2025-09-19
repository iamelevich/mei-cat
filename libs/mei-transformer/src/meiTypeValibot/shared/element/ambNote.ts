import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAmbNoteAnlSchema } from "../../analytical";
import { AttrAmbNoteGesSchema } from "../../gestural";
import { AttrAmbNoteLogSchema, AttrCommonSchema } from "..";
import { AttrAmbNoteVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";

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
export const AmbNoteSchema = v.intersect([AmbNoteBaseSchema]);

export type AmbNoteData = v.InferOutput<typeof AmbNoteSchema>;
