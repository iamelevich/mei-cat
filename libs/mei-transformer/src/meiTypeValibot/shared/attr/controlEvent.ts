import * as v from "valibot";

/**
 * Attributes for control events.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.controlEvent.html
 */
export const AttrControlEventSchema = v.object({
  // TODO: Add control event attributes
});

export type AttrControlEventData = v.InferOutput<typeof AttrControlEventSchema>;
