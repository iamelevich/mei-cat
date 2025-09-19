import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelHeadLikeSchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for DedicationSchema
 */
const DedicationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a dedicatory statement.
 * @see https://music-encoding.org/guidelines/v5/elements/dedication.html
 */
export const DedicationSchema = v.intersect([
	DedicationBaseSchema,
	ModelHeadLikeSchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type DedicationData = v.InferOutput<typeof DedicationSchema>;
