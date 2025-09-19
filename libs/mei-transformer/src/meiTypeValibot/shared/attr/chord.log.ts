import * as v from "valibot";
import { AttrChordLogCmnSchema } from "../../cmn/attr/chord.log.cmn";
import { AttrArticulationSchema } from "../attr/articulation";
import { AttrAugmentDotsSchema } from "../attr/augmentDots";
import { AttrCueSchema } from "../attr/cue";
import { AttrDurationLogSchema } from "../attr/duration.log";
import { AttrEventSchema } from "../attr/event";
import { AttrSylTextSchema } from "../attr/sylText";

/**
 * Logical domain attributes for chord. The artic, dots, and dur attributes encode the written articulations, augmentation dots, and duration values. The beam, fermata, lv, slur, syl, tie, and tuplet attributes may be used to indicate the attachment of these things to this chord. If visual information about these things needs to be recorded, then either the elements corresponding to these attributes or the attributes available in the att.vis.chord class should be employed..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.log.html
 */
export const AttrChordLogSchema = v.object({
	// Inherited attribute classes
	...AttrArticulationSchema.entries,
	...AttrAugmentDotsSchema.entries,
	...AttrChordLogCmnSchema.entries,
	...AttrCueSchema.entries,
	...AttrDurationLogSchema.entries,
	...AttrEventSchema.entries,
	...AttrSylTextSchema.entries,
});

export type AttrChordLogData = v.InferOutput<typeof AttrChordLogSchema>;
