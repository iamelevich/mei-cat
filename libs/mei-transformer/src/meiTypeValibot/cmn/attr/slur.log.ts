import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slur.log.html
 */
export const AttrSlurLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrSlurLogData = v.InferOutput<typeof AttrSlurLogSchema>;
