import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFAnlSchema } from "../../analytical";
import { AttrFGesSchema } from "../../gestural";
import { AttrFLogSchema } from "..";
import { AttrFVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for FSchema
 */
const FBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFAnlSchema.entries,
	...AttrFGesSchema.entries,
	...AttrFLogSchema.entries,
	...AttrFVisSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Single element of a figured bass indication.
 * @see https://music-encoding.org/guidelines/v5/elements/f.html
 */
export const FSchema = v.intersect([
	FBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type FData = v.InferOutput<typeof FSchema>;
