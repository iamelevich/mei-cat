import * as v from "valibot";
import { AttrSylAnlSchema } from "../../analytical/attr/syl.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrSylGesSchema } from "../../gestural/attr/syl.ges";
import { AttrSylVisSchema } from "../../visual/attr/syl.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrSylLogSchema } from "../attr/syl.log";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

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
export const SylSchema = v.lazy(() =>
	v.intersect([
		SylBaseSchema,
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type SylData = v.InferOutput<typeof SylSchema>;
