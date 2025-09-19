import * as v from "valibot";
import { AttrFAnlSchema } from "../../analytical/attr/f.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrFGesSchema } from "../../gestural/attr/f.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { AttrFVisSchema } from "../../visual/attr/f.vis";
import { AttrFLogSchema } from "../attr/f.log";

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
export const FSchema = v.lazy(() =>
	v.intersect([
		FBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type FData = v.InferOutput<typeof FSchema>;
