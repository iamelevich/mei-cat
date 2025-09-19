import * as v from "valibot";
import { AttrFingAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrFingGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFingVisSchema } from "../../visual";
import { AttrFingLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for FingSchema
 */
const FingBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrFingAnlSchema.entries,
	...AttrFingGesSchema.entries,
	...AttrFingLogSchema.entries,
	...AttrFingVisSchema.entries,
});

/**
 * An individual finger in a fingering indication.
 * @see https://music-encoding.org/guidelines/v5/elements/fing.html
 */
export const FingSchema = v.intersect([
	FingBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type FingData = v.InferOutput<typeof FingSchema>;
