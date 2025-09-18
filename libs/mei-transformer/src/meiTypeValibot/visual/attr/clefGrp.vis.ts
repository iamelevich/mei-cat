import * as v from "valibot";

/**
 * Attributes for clefGrp.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clefGrp.vis.html
 */
export const AttrClefGrpVisSchema = v.object({
  // TODO: Add clefGrp.vis attributes
});

export type AttrClefGrpVisData = v.InferOutput<typeof AttrClefGrpVisSchema>;
