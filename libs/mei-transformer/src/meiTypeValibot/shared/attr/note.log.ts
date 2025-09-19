import * as v from "valibot";
import { AttrNoteLogCmnSchema } from "../../cmn";
import {
	AttrDurationQualitySchema,
	AttrNoteLogMensuralSchema,
} from "../../mensural";
import {
	AttrAugmentDotsSchema,
	AttrColorationSchema,
	AttrCueSchema,
	AttrDurationLogSchema,
	AttrEventSchema,
	AttrPitchedSchema,
} from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.log.html
 */
export const AttrNoteLogSchema = v.object({
	// Inherited attribute classes
	...AttrAugmentDotsSchema.entries,
	...AttrColorationSchema.entries,
	...AttrCueSchema.entries,
	...AttrDurationLogSchema.entries,
	...AttrDurationQualitySchema.entries,
	...AttrEventSchema.entries,
	...AttrNoteLogCmnSchema.entries,
	...AttrNoteLogMensuralSchema.entries,
	...AttrPitchedSchema.entries,
});

export type AttrNoteLogData = v.InferOutput<typeof AttrNoteLogSchema>;
