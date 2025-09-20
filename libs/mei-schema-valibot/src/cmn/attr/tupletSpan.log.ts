import * as v from "valibot";
import { AttrControlEventSchema } from "../../shared/attr/controlEvent";
import { AttrDurationAdditiveSchema } from "../../shared/attr/duration.additive";
import { AttrDurationRatioSchema } from "../../shared/attr/duration.ratio";
import { AttrStartEndIdSchema } from "../../shared/attr/startEndId";
import { AttrTimestamp2LogSchema } from "../../shared/attr/timestamp2.log";
import { AttrBeamedWithSchema } from "./beamedWith";

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
