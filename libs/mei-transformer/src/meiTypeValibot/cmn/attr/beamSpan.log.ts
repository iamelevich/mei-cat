import * as v from "valibot";
import { AttrBeamedWithSchema } from "..";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

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
