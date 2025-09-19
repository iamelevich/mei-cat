import * as v from "valibot";
import { AttrControlEventSchema } from "../../shared/attr/controlEvent";
import { AttrDurationAdditiveSchema } from "../../shared/attr/duration.additive";
import { AttrStartEndIdSchema } from "../../shared/attr/startEndId";
import { AttrTimestamp2LogSchema } from "../../shared/attr/timestamp2.log";
import { AttrBeamedWithSchema } from "../attr/beamedWith";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamSpan.log.html
 */
export const AttrBeamSpanLogSchema = v.object({
	// Inherited attribute classes
	...AttrBeamedWithSchema.entries,
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrBeamSpanLogData = v.InferOutput<typeof AttrBeamSpanLogSchema>;
