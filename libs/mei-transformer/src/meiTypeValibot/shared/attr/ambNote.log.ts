import * as v from "valibot";
import { AttrAccidentalSchema } from "../attr/accidental";
import { AttrColorationSchema } from "../attr/coloration";
import { AttrDurationLogSchema } from "../attr/duration.log";
import { AttrPitchedSchema } from "../attr/pitched";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambNote.log.html
 */
export const AttrAmbNoteLogSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalSchema.entries,
	...AttrColorationSchema.entries,
	...AttrDurationLogSchema.entries,
	...AttrPitchedSchema.entries,
});

export type AttrAmbNoteLogData = v.InferOutput<typeof AttrAmbNoteLogSchema>;
