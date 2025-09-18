import * as v from "valibot";

/**
 * Attributes for accid.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accid.vis.html
 */
export const AttrAccidVisSchema = v.object({
  // TODO: Add accid.vis attributes
});

export type AttrAccidVisData = v.InferOutput<typeof AttrAccidVisSchema>;
