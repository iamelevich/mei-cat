import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Logical domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bend.log.html
 */
export const AttrBendLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrBendLogData = v.InferOutput<typeof AttrBendLogSchema>;
