import * as v from "valibot";

/**
 * Attributes for slur.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slur.vis.html
 */
export const AttrSlurVisSchema = v.object({
  // TODO: Add slur.vis attributes
});

export type AttrSlurVisData = v.InferOutput<typeof AttrSlurVisSchema>;
