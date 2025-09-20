import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelSylLikeSchema } from "../../shared/model/sylLike";
import { ModelTextPhraseLikeSchema } from "../../shared/model/textPhraseLike";

/**
 * Base schema with attribute, to simplify types for SegSchema
 */
const SegBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * represents any segmentation of text below the "text component" level.
 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
 */
export const SegSchema = v.lazy(() =>
	v.intersect([
		SegBaseSchema,
		ModelEditLikeSchema,
		ModelSylLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type SegData = v.InferOutput<typeof SegSchema>;
