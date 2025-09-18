import * as v from "valibot";

/**
 * Attributes for graceGrp.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graceGrp.vis.html
 */
export const AttrGraceGrpVisSchema = v.object({
  // TODO: Add graceGrp.vis attributes
});

export type AttrGraceGrpVisData = v.InferOutput<typeof AttrGraceGrpVisSchema>;
