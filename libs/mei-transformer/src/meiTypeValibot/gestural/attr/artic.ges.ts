import * as v from "valibot";

/**
 * Attributes for artic.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.artic.ges.html
 */
export const AttrArticGesSchema = v.object({
  // TODO: Add artic.ges attributes
});

export type AttrArticGesData = v.InferOutput<typeof AttrArticGesSchema>;
