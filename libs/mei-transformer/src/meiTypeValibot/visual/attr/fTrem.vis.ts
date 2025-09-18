import * as v from "valibot";

/**
 * Attributes for fTrem.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fTrem.vis.html
 */
export const AttrFTremVisSchema = v.object({
  // TODO: Add fTrem.vis attributes
});

export type AttrFTremVisData = v.InferOutput<typeof AttrFTremVisSchema>;
