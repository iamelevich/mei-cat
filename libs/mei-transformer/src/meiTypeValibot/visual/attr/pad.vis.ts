import * as v from "valibot";

/**
 * Attributes for pad.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pad.vis.html
 */
export const AttrPadVisSchema = v.object({
  // TODO: Add pad.vis attributes
});

export type AttrPadVisData = v.InferOutput<typeof AttrPadVisSchema>;
