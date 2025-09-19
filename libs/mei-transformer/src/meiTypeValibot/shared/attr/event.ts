import * as v from "valibot";
import { AttrTimestampGesSchema } from "../../gestural/attr/timestamp.ges";
import { AttrAlignmentSchema } from "../../performance/attr/alignment";
import { AttrLayerIdentSchema } from "../attr/layerIdent";
import { AttrStaffIdentSchema } from "../attr/staffIdent";
import { AttrTimestampLogSchema } from "../attr/timestamp.log";

/**
 * Attributes that apply to all written events, <abbr>e.g.</abbr>, note, chord, rest, etc..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.event.html
 */
export const AttrEventSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrLayerIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrTimestampGesSchema.entries,
	...AttrTimestampLogSchema.entries,
});

export type AttrEventData = v.InferOutput<typeof AttrEventSchema>;
