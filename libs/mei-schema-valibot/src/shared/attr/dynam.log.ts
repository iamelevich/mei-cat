import * as v from "valibot";
import { AttrControlEventSchema } from "./controlEvent";
import { AttrDurationAdditiveSchema } from "./duration.additive";
import { AttrStartEndIdSchema } from "./startEndId";
import { AttrTimestamp2LogSchema } from "./timestamp2.log";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dynam.log.html
 */
export const AttrDynamLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrDynamLogData = v.InferOutput<typeof AttrDynamLogSchema>;
