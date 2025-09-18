import * as v from "valibot";

/**
 * Attributes for grpSym.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.grpSym.vis.html
 */
export const AttrGrpSymVisSchema = v.object({
  // TODO: Add grpSym.vis attributes
});

export type AttrGrpSymVisData = v.InferOutput<typeof AttrGrpSymVisSchema>;
