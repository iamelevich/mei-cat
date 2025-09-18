import * as v from "valibot";

/**
 * Attributes for fing.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fing.vis.html
 */
export const AttrFingVisSchema = v.object({
  // TODO: Add fing.vis attributes
});

export type AttrFingVisData = v.InferOutput<typeof AttrFingVisSchema>;
