import * as v from "valibot";
import { SylLikeSchema } from "../../shared/model/sylLike";
import { EditTransPartMusicSchema } from "./editTransPart.music";
import { EditTransPartTextSchema } from "./editTransPart.text";

/**
 * Groups elements that may appear as part of editorial and transcription elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editTransPart.html
 */
export const EditTransPartSchema = v.intersect([
	EditTransPartMusicSchema,
	EditTransPartTextSchema,
	SylLikeSchema,
]);

export type EditTransPartData = v.InferOutput<typeof EditTransPartSchema>;
