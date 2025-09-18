import * as v from "valibot";

/**
 * Attributes for quilisma.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.quilisma.ges.html
 */
export const AttrQuilismaGesSchema = v.object({
  // TODO: Add quilisma.ges attributes
});

export type AttrQuilismaGesData = v.InferOutput<typeof AttrQuilismaGesSchema>;
