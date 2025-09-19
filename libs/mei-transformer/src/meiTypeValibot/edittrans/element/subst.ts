import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrEditSchema } from "../attr/edit";
import { AttrTransSchema } from "../attr/trans";
import { ModelTranscriptionLikeSchema } from "../model/transcriptionLike";

/**
 * Base schema with attribute, to simplify types for SubstSchema
 */
const SubstBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrTransSchema.entries,
});

/**
 * Groups transcriptional elements when the combination is to be regarded as a single intervention in the text.
 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
 */
export const SubstSchema = v.lazy(() =>
	v.intersect([SubstBaseSchema, ModelTranscriptionLikeSchema]),
);

export type SubstData = v.InferOutput<typeof SubstSchema>;
