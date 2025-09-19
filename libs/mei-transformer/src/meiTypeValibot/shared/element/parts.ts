import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrMetadataPointingSchema,
	AttrPartsLogSchema,
	ModelPartLikeSchema,
} from "..";
import { AttrPartsAnlSchema } from "../../analytical";
import { AttrPartsGesSchema } from "../../gestural";
import { AttrPartsVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for PartsSchema
 */
const PartsBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPartsAnlSchema.entries,
	...AttrPartsGesSchema.entries,
	...AttrPartsLogSchema.entries,
	...AttrPartsVisSchema.entries,
});

/**
 * Provides a container for performers' parts.
 * @see https://music-encoding.org/guidelines/v5/elements/parts.html
 */
export const PartsSchema = v.intersect([PartsBaseSchema, ModelPartLikeSchema]);

export type PartsData = v.InferOutput<typeof PartsSchema>;
