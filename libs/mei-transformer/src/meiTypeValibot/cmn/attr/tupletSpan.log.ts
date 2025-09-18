import * as v from "valibot";

/**
 * Attributes for tupletSpan.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tupletSpan.log.html
 */
export const AttrTupletSpanLogSchema = v.object({
  // TODO: Add tupletSpan.log attributes
});

export type AttrTupletSpanLogData = v.InferOutput<typeof AttrTupletSpanLogSchema>;
