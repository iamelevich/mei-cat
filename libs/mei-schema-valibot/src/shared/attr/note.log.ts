import * as v from "valibot";
import { AttrNoteLogCmnSchema } from "../../cmn/attr/note.log.cmn";
import { AttrDurationQualitySchema } from "../../mensural/attr/duration.quality";
import { AttrNoteLogMensuralSchema } from "../../mensural/attr/note.log.mensural";
import { AttrAugmentDotsSchema } from "./augmentDots";
import { AttrColorationSchema } from "./coloration";
import { AttrCueSchema } from "./cue";
import { AttrDurationLogSchema } from "./duration.log";
import { AttrEventSchema } from "./event";
import { AttrPitchedSchema } from "./pitched";

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
