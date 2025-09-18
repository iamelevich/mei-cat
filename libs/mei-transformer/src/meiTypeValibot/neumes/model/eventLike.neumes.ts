import * as v from "valibot";

/**
 * Groups elements that represent eventlike.neumes parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.neumes.html
 */
export const EventLikeNeumesSchema = v.object({
  // TODO: Add eventlike.neumes elements
});

export type EventLikeNeumesData = v.InferOutput<typeof EventLikeNeumesSchema>;
