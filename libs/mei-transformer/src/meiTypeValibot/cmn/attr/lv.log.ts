import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Attributes for lv.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lv.log.html
 */
export const AttrLvLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrLvLogData = v.InferOutput<typeof AttrLvLogSchema>;
