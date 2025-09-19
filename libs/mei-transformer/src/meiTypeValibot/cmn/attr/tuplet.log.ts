import * as v from "valibot";
import {
	AttrDurationAdditiveSchema,
	AttrDurationRatioSchema,
	AttrEventSchema,
	AttrStartEndIdSchema,
} from "../../shared";
import { AttrBeamedWithSchema } from "..";

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
