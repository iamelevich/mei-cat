import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrSourceSchema } from "../attr/source";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for DescSchema
 */
const DescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrSourceSchema.entries,
});

/**
 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
 */
export const DescSchema = v.lazy(() =>
	v.intersect([
		DescBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type DescData = v.InferOutput<typeof DescSchema>;
