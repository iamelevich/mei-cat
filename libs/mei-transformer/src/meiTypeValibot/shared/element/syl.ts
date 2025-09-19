import * as v from "valibot";
import { AttrSylAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSylGesSchema } from "../../gestural";
import { AttrSylVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrSylLogSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

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
