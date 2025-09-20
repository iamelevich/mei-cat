import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrInternetMediaSchema } from "../../shared/attr/internetMedia";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../../shared/attr/targetEval";

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
export const PtrSchema = v.lazy(() => v.intersect([PtrBaseSchema]));

export type PtrData = v.InferOutput<typeof PtrSchema>;
