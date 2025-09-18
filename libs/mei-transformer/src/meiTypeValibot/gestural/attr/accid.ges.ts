import * as v from "valibot";

/**
 * Attributes for accid.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accid.ges.html
 */
export const AttrAccidGesSchema = v.object({
  // TODO: Add accid.ges attributes
});

export type AttrAccidGesData = v.InferOutput<typeof AttrAccidGesSchema>;
