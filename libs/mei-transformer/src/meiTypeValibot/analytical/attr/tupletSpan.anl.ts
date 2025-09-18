import * as v from "valibot";

/**
 * Attributes for tupletSpan.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tupletSpan.anl.html
 */
export const AttrTupletSpanAnlSchema = v.object({
  // TODO: Add tupletSpan.anl attributes
});

export type AttrTupletSpanAnlData = v.InferOutput<typeof AttrTupletSpanAnlSchema>;
