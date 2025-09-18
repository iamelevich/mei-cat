import * as v from "valibot";

/**
 * Attributes for timestamp.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.timestamp.ges.html
 */
export const AttrTimestampGesSchema = v.object({
  // TODO: Add timestamp.ges attributes
});

export type AttrTimestampGesData = v.InferOutput<typeof AttrTimestampGesSchema>;
