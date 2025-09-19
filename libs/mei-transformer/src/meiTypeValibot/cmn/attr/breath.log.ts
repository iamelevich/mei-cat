import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance";
import {
	AttrLayerIdentSchema,
	AttrPartIdentSchema,
	AttrStaffIdentSchema,
	AttrStartIdSchema,
	AttrTimestampLogSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.breath.log.html
 */
export const AttrBreathLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrStartIdSchema.entries,
	...AttrTimestampLogSchema.entries,
});

export type AttrBreathLogData = v.InferOutput<typeof AttrBreathLogSchema>;
