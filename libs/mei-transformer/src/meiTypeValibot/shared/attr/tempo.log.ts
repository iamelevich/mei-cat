import * as v from "valibot";
import { AttrControlEventSchema } from "../attr/controlEvent";
import { AttrMmTempoSchema } from "../attr/mmTempo";
import { AttrStartEndIdSchema } from "../attr/startEndId";
import { AttrTimestamp2LogSchema } from "../attr/timestamp2.log";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tempo.log.html
 */
export const AttrTempoLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrMmTempoSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	// Direct attributes
	/**
	 * Records the function of a tempo indication.
	 */
	"@func": v.optional(v.string()),
});

export type AttrTempoLogData = v.InferOutput<typeof AttrTempoLogSchema>;
