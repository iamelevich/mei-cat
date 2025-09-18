import * as v from "valibot";

/**
 * Attributes for bTrem.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bTrem.vis.html
 */
export const AttrBTremVisSchema = v.object({
  // TODO: Add bTrem.vis attributes
});

export type AttrBTremVisData = v.InferOutput<typeof AttrBTremVisSchema>;
