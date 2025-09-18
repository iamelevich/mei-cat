import * as v from "valibot";

/**
 * Attributes for rest.vis.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.vis.mensural.html
 */
export const AttrRestVisMensuralSchema = v.object({
  // TODO: Add rest.vis.mensural attributes
});

export type AttrRestVisMensuralData = v.InferOutput<typeof AttrRestVisMensuralSchema>;
