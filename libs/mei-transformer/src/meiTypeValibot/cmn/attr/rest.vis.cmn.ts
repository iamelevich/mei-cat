import * as v from "valibot";

/**
 * Attributes for rest.vis.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.vis.cmn.html
 */
export const AttrRestVisCmnSchema = v.object({
  // TODO: Add rest.vis.cmn attributes
});

export type AttrRestVisCmnData = v.InferOutput<typeof AttrRestVisCmnSchema>;
