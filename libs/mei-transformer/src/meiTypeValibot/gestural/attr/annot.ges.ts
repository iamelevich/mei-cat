import * as v from "valibot";

/**
 * Attributes for annot.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.annot.ges.html
 */
export const AttrAnnotGesSchema = v.object({
  // TODO: Add annot.ges attributes
});

export type AttrAnnotGesData = v.InferOutput<typeof AttrAnnotGesSchema>;
