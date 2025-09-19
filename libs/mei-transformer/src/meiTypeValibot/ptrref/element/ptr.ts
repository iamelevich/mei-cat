import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrInternetMediaSchema,
	AttrMetadataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for PtrSchema
 */
const PtrBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrInternetMediaSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Defines a traversible pointer to another location, using only attributes to describe the destination.
 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
 */
export const PtrSchema = v.intersect([PtrBaseSchema]);

export type PtrData = v.InferOutput<typeof PtrSchema>;
