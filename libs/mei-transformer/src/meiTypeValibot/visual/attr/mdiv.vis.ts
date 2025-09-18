import * as v from "valibot";

/**
 * Attributes for mdiv.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mdiv.vis.html
 */
export const AttrMdivVisSchema = v.object({
  // TODO: Add mdiv.vis attributes
});

export type AttrMdivVisData = v.InferOutput<typeof AttrMdivVisSchema>;
