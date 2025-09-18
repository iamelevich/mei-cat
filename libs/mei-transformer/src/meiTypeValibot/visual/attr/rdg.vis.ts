import * as v from "valibot";

/**
 * Attributes for rdg.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rdg.vis.html
 */
export const AttrRdgVisSchema = v.object({
  // TODO: Add rdg.vis attributes
});

export type AttrRdgVisData = v.InferOutput<typeof AttrRdgVisSchema>;
