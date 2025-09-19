import * as v from "valibot";
import { AttrDynamAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrDynamGesSchema } from "../../gestural";
import { AttrDynamVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrDynamLogSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for DynamSchema
 */
const DynamBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDynamAnlSchema.entries,
	...AttrDynamGesSchema.entries,
	...AttrDynamLogSchema.entries,
	...AttrDynamVisSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Indication of the volume of a note, phrase, or section of music.
 * @see https://music-encoding.org/guidelines/v5/elements/dynam.html
 */
export const DynamSchema = v.intersect([
	DynamBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type DynamData = v.InferOutput<typeof DynamSchema>;
