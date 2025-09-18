import * as v from "valibot";

/**
 * Attributes for timestamp2.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.timestamp2.ges.html
 */
export const AttrTimestamp2GesSchema = v.object({
  // TODO: Add timestamp2.ges attributes
});

export type AttrTimestamp2GesData = v.InferOutput<typeof AttrTimestamp2GesSchema>;
