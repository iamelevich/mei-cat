import * as v from "valibot";

/**
 * Attributes for placement relative to event.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.placementRelEvent.html
 */
export const AttrPlacementRelEventSchema = v.object({
  // TODO: Add placement relative to event attributes
});

export type AttrPlacementRelEventData = v.InferOutput<typeof AttrPlacementRelEventSchema>;
