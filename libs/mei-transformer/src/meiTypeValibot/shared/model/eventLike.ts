import * as v from "valibot";

/**
 * Groups elements that represent event-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.html
 */
export const EventLikeSchema = v.object({
  // TODO: Add event-like elements
});

export type EventLikeData = v.InferOutput<typeof EventLikeSchema>;
