import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance";
import {
	AttrLayerIdentSchema,
	AttrPartIdentSchema,
	AttrPlistSchema,
	AttrStaffIdentSchema,
	AttrTargetEvalSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hispanTick.log.html
 */
export const AttrHispanTickLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrPlistSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrTargetEvalSchema.entries,
});

export type AttrHispanTickLogData = v.InferOutput<
	typeof AttrHispanTickLogSchema
>;
