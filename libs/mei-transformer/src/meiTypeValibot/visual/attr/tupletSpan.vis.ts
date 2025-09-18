import * as v from "valibot";

/**
 * Attributes for tupletSpan.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tupletSpan.vis.html
 */
export const AttrTupletSpanVisSchema = v.object({
  // TODO: Add tupletSpan.vis attributes
});

export type AttrTupletSpanVisData = v.InferOutput<typeof AttrTupletSpanVisSchema>;
