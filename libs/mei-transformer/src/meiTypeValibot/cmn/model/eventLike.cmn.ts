import * as v from "valibot";

/**
 * Groups elements that represent events in common music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.cmn.html
 */
export const EventLikeCmnSchema = v.object({
  // TODO: Add CMN event elements
});

export type EventLikeCmnData = v.InferOutput<typeof EventLikeCmnSchema>;
