import * as v from "valibot";

/**
 * Attributes for syl.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syl.vis.html
 */
export const AttrSylVisSchema = v.object({
  // TODO: Add syl.vis attributes
});

export type AttrSylVisData = v.InferOutput<typeof AttrSylVisSchema>;
