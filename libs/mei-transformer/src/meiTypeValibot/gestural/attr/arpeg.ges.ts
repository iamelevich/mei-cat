import * as v from "valibot";

/**
 * Attributes for arpeg.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.arpeg.ges.html
 */
export const AttrArpegGesSchema = v.object({
  // TODO: Add arpeg.ges attributes
});

export type AttrArpegGesData = v.InferOutput<typeof AttrArpegGesSchema>;
