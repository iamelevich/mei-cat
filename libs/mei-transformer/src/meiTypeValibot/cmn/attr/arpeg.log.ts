import * as v from "valibot";

/**
 * Attributes for arpeg.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.arpeg.log.html
 */
export const AttrArpegLogSchema = v.object({
  // TODO: Add arpeg.log attributes
});

export type AttrArpegLogData = v.InferOutput<typeof AttrArpegLogSchema>;
