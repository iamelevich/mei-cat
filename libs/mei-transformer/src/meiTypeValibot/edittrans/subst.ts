import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared";
import { AttrEditSchema, AttrTransSchema } from "./attr";
import { EditLikeSchema } from "./model/editLike";
import { TranscriptionLikeSchema } from "./model/transcriptionLike";

/**
 * Groups transcriptional elements when the combination is to be regarded as a single intervention in the text.
 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
 */
export const SubstSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrEditSchema.entries,
		...AttrTransSchema.entries,
	}),
	EditLikeSchema,
	TranscriptionLikeSchema,
]);

export type SubstData = v.InferOutput<typeof SubstSchema>;
