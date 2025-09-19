import * as v from "valibot";
import { AttrFingAnlSchema } from "../../analytical/attr/fing.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrFingGesSchema } from "../../gestural/attr/fing.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { AttrFingVisSchema } from "../../visual/attr/fing.vis";
import { AttrFingLogSchema } from "../attr/fing.log";

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
export const FingSchema = v.lazy(() =>
	v.intersect([
		FingBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type FingData = v.InferOutput<typeof FingSchema>;
