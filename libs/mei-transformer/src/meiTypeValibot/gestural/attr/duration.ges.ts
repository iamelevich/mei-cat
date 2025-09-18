import * as v from "valibot";

/**
 * Attributes for duration.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.ges.html
 */
export const AttrDurationGesSchema = v.object({
  // TODO: Add duration.ges attributes
});

export type AttrDurationGesData = v.InferOutput<typeof AttrDurationGesSchema>;
