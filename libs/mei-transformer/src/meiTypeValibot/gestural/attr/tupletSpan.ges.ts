import * as v from "valibot";

/**
 * Attributes for tupletSpan.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tupletSpan.ges.html
 */
export const AttrTupletSpanGesSchema = v.object({
  // TODO: Add tupletSpan.ges attributes
});

export type AttrTupletSpanGesData = v.InferOutput<typeof AttrTupletSpanGesSchema>;
