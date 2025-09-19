import * as v from "valibot";
import { AttrBeamedWithSchema } from "..";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrDurationRatioSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tupletSpan.log.html
 */
export const AttrTupletSpanLogSchema = v.object({
	// Inherited attribute classes
	...AttrBeamedWithSchema.entries,
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrDurationRatioSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrTupletSpanLogData = v.InferOutput<
	typeof AttrTupletSpanLogSchema
>;
