import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrSylLogSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSylAnlSchema } from "../../analytical";
import { AttrSylGesSchema } from "../../gestural";
import { AttrSylVisSchema } from "../../visual";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for SylSchema
 */
const SylBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrSylAnlSchema.entries,
	...AttrSylGesSchema.entries,
	...AttrSylLogSchema.entries,
	...AttrSylVisSchema.entries,
});

/**
 * Individual lyric syllable.
 * @see https://music-encoding.org/guidelines/v5/elements/syl.html
 */
export const SylSchema = v.intersect([
	SylBaseSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type SylData = v.InferOutput<typeof SylSchema>;
