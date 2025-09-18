import * as v from "valibot";

/**
 * Attributes for tuplet.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuplet.log.html
 */
export const AttrTupletLogSchema = v.object({
  // TODO: Add tuplet.log attributes
});

export type AttrTupletLogData = v.InferOutput<typeof AttrTupletLogSchema>;
