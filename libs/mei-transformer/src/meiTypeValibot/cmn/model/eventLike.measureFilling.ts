import * as v from "valibot";

/**
 * Groups elements that represent measure-filling events.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.measureFilling.html
 */
export const EventLikeMeasureFillingSchema = v.object({
  // TODO: Add measure-filling event elements
});

export type EventLikeMeasureFillingData = v.InferOutput<typeof EventLikeMeasureFillingSchema>;
