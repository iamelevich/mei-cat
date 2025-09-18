import * as v from "valibot";

/**
 * Attributes for barLine.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.vis.html
 */
export const AttrBarLineVisSchema = v.object({
  // TODO: Add barLine.vis attributes
});

export type AttrBarLineVisData = v.InferOutput<typeof AttrBarLineVisSchema>;
