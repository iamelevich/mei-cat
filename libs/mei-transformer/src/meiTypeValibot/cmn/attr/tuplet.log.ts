import * as v from "valibot";
import { AttrDurationAdditiveSchema } from "../../shared/attr/duration.additive";
import { AttrDurationRatioSchema } from "../../shared/attr/duration.ratio";
import { AttrEventSchema } from "../../shared/attr/event";
import { AttrStartEndIdSchema } from "../../shared/attr/startEndId";
import { AttrBeamedWithSchema } from "../attr/beamedWith";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuplet.log.html
 */
export const AttrTupletLogSchema = v.object({
	// Inherited attribute classes
	...AttrBeamedWithSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrDurationRatioSchema.entries,
	...AttrEventSchema.entries,
	...AttrStartEndIdSchema.entries,
});

export type AttrTupletLogData = v.InferOutput<typeof AttrTupletLogSchema>;
