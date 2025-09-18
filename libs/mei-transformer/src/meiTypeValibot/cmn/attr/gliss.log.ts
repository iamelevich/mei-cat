import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Attributes for gliss.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.gliss.log.html
 */
export const AttrGlissLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrGlissLogData = v.InferOutput<typeof AttrGlissLogSchema>;
