import * as v from "valibot";

/**
 * Attributes for fingGrp.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fingGrp.vis.html
 */
export const AttrFingGrpVisSchema = v.object({
  // TODO: Add fingGrp.vis attributes
});

export type AttrFingGrpVisData = v.InferOutput<typeof AttrFingGrpVisSchema>;
