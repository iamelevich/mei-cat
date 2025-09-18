import * as v from "valibot";

/**
 * Attributes for tuplet.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuplet.ges.html
 */
export const AttrTupletGesSchema = v.object({
  // TODO: Add tuplet.ges attributes
});

export type AttrTupletGesData = v.InferOutput<typeof AttrTupletGesSchema>;
