import * as v from "valibot";
import { AttrTimestampGesSchema } from "../../gestural";
import { AttrAlignmentSchema } from "../../performance";
import {
	AttrLayerIdentSchema,
	AttrStaffIdentSchema,
	AttrTimestampLogSchema,
} from "..";

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
