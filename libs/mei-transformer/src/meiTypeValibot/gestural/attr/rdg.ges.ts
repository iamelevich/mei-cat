import * as v from "valibot";

/**
 * Attributes for rdg.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rdg.ges.html
 */
export const AttrRdgGesSchema = v.object({
  // TODO: Add rdg.ges attributes
});

export type AttrRdgGesData = v.InferOutput<typeof AttrRdgGesSchema>;
