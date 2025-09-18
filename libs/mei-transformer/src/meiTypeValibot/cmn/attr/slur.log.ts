import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Attributes for slur.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slur.log.html
 */
export const AttrSlurLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrSlurLogData = v.InferOutput<typeof AttrSlurLogSchema>;
