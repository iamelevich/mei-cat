import * as v from "valibot";

/**
 * Groups elements that represent eventlike.mensural parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.mensural.html
 */
export const EventLikeMensuralSchema = v.object({
  // TODO: Add eventlike.mensural elements
});

export type EventLikeMensuralData = v.InferOutput<typeof EventLikeMensuralSchema>;
