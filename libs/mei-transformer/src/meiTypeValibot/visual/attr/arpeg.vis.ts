import * as v from "valibot";

/**
 * Attributes for arpeg.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.arpeg.vis.html
 */
export const AttrArpegVisSchema = v.object({
  // TODO: Add arpeg.vis attributes
});

export type AttrArpegVisData = v.InferOutput<typeof AttrArpegVisSchema>;
