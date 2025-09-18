import * as v from "valibot";

/**
 * Groups elements that represent event parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventPart.html
 */
export const EventPartSchema = v.object({
  // TODO: Add event part elements
});

export type EventPartData = v.InferOutput<typeof EventPartSchema>;
