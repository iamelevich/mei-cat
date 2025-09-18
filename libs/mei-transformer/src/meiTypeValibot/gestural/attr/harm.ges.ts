import * as v from "valibot";

/**
 * Attributes for harm.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harm.ges.html
 */
export const AttrHarmGesSchema = v.object({
  // TODO: Add harm.ges attributes
});

export type AttrHarmGesData = v.InferOutput<typeof AttrHarmGesSchema>;
