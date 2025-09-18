import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";
import { AttrBeamedWithSchema } from "./beamedWith";

/**
 * Logical domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamSpan.log.html
 */
export const AttrBeamSpanLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrBeamedWithSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrBeamSpanLogData = v.InferOutput<typeof AttrBeamSpanLogSchema>;
