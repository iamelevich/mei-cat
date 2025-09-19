import * as v from "valibot";
import { AttrControlEventSchema } from "../../shared/attr/controlEvent";
import { AttrDurationAdditiveSchema } from "../../shared/attr/duration.additive";
import { AttrStartEndIdSchema } from "../../shared/attr/startEndId";
import { AttrTimestamp2LogSchema } from "../../shared/attr/timestamp2.log";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fing.log.html
 */
export const AttrFingLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrFingLogData = v.InferOutput<typeof AttrFingLogSchema>;
