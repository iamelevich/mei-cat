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
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.signifLet.log.html
 */
export const AttrSignifLetLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrPlistSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrTargetEvalSchema.entries,
});

export type AttrSignifLetLogData = v.InferOutput<typeof AttrSignifLetLogSchema>;
