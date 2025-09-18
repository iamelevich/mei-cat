import * as v from "valibot";
import { DivSchema } from "../../shared";

/**
 * Groups elements used to represent generic structural divisions of text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.divLike.html
 */
export const DivLikeSchema = v.object({
  /**
   * Major structural division of text, such as a preface, chapter or section.
   * @see https://music-encoding.org/guidelines/v5/elements/div.html
   */
  div: v.optional(
    v.union([v.lazy(() => DivSchema), v.array(v.lazy(() => DivSchema))]),
  ),
});

export type DivLikeData = v.InferOutput<typeof DivLikeSchema>;