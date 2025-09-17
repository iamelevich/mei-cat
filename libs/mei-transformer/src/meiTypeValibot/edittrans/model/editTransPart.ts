import * as v from "valibot";
import { EditTransPartMusicSchema } from "./editTransPart.music";
import { EditTransPartTextSchema } from "./editTransPart.text";
import { SylLikeSchema } from "../../shared/model/sylLike";

/**
 * Groups elements that may appear as part of editorial and transcription elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editTransPart.html
 */
export const EditTransPartSchema = v.object({
  ...EditTransPartMusicSchema.entries,
  ...EditTransPartTextSchema.entries,
  ...SylLikeSchema.entries,
});

export type EditTransPartData = v.InferOutput<typeof EditTransPartSchema>;
