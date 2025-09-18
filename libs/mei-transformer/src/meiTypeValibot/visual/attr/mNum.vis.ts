import * as v from "valibot";

/**
 * Attributes for mNum.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mNum.vis.html
 */
export const AttrMNumVisSchema = v.object({
  // TODO: Add mNum.vis attributes
});

export type AttrMNumVisData = v.InferOutput<typeof AttrMNumVisSchema>;
