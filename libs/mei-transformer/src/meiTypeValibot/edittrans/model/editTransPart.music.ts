import * as v from "valibot";
import { VoltaSchema } from "../../shared/volta";
import { ControlEventLikeSchema } from "../../shared/model/controlEventLike";
import { ControlEventLikeCmnSchema } from "../../cmn/model/controlEventLike.cmn";
import { LayerLikeSchema } from "../../shared/model/layerLike";
import { VerseLikeSchema } from "../../shared/model/verseLike";

/**
 * Groups elements that may appear as part of editorial and transcription elements in music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editTransPart.music.html
 */
export const EditTransPartMusicSchema = v.object({
  /**
   * Alternative ending for a repeated passage of music; i.e., prima volta, seconda volta, etc.
   * @see https://music-encoding.org/guidelines/v5/elements/volta.html
   */
  volta: v.optional(
    v.union([v.lazy(() => VoltaSchema), v.array(v.lazy(() => VoltaSchema))]),
  ),

  // Merge model classes
  ...ControlEventLikeSchema.entries,
  ...ControlEventLikeCmnSchema.entries,
  ...LayerLikeSchema.entries,
  ...VerseLikeSchema.entries,
});

export type EditTransPartMusicData = v.InferOutput<typeof EditTransPartMusicSchema>;
