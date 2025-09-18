import * as v from "valibot";

/**
 * Attributes for events.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.event.html
 */
export const AttrEventSchema = v.object({
  // TODO: Add event attributes
});

export type AttrEventData = v.InferOutput<typeof AttrEventSchema>;
