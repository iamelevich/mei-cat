import * as v from "valibot";

/**
 * Attributes for trill.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trill.ges.html
 */
export const AttrTrillGesSchema = v.object({
  // TODO: Add trill.ges attributes
});

export type AttrTrillGesData = v.InferOutput<typeof AttrTrillGesSchema>;
