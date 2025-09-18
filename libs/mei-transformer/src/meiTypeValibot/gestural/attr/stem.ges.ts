import * as v from "valibot";

/**
 * Attributes for stem.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stem.ges.html
 */
export const AttrStemGesSchema = v.object({
  // TODO: Add stem.ges attributes
});

export type AttrStemGesData = v.InferOutput<typeof AttrStemGesSchema>;
