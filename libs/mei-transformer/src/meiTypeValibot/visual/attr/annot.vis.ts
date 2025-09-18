import * as v from "valibot";

/**
 * Attributes for annot.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.annot.vis.html
 */
export const AttrAnnotVisSchema = v.object({
  // TODO: Add annot.vis attributes
});

export type AttrAnnotVisData = v.InferOutput<typeof AttrAnnotVisSchema>;
