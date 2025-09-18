import * as v from "valibot";

/**
 * Attributes for line.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.line.vis.html
 */
export const AttrLineVisSchema = v.object({
  // TODO: Add line.vis attributes
});

export type AttrLineVisData = v.InferOutput<typeof AttrLineVisSchema>;
