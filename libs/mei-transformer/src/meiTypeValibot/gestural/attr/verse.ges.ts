import * as v from "valibot";

/**
 * Attributes for verse.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verse.ges.html
 */
export const AttrVerseGesSchema = v.object({
  // TODO: Add verse.ges attributes
});

export type AttrVerseGesData = v.InferOutput<typeof AttrVerseGesSchema>;
