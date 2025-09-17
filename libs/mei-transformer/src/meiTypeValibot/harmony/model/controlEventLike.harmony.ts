import * as v from "valibot";
import { HarmLikeSchema } from "../../shared/model/harmLike";

/**
 * Groups elements that represent control events in harmony.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.controlEventLike.harmony.html
 */
export const ControlEventLikeHarmonySchema = v.object({
  // Merge model classes
  ...HarmLikeSchema.entries,
});

export type ControlEventLikeHarmonyData = v.InferOutput<typeof ControlEventLikeHarmonySchema>;
