import * as v from "valibot";

/**
 * Attributes for ncGrp.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ncGrp.vis.html
 */
export const AttrNcGrpVisSchema = v.object({
  // TODO: Add ncGrp.vis attributes
});

export type AttrNcGrpVisData = v.InferOutput<typeof AttrNcGrpVisSchema>;
