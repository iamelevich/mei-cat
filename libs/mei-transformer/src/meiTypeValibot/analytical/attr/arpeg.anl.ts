import * as v from "valibot";

/**
 * Attributes for arpeg.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.arpeg.anl.html
 */
export const AttrArpegAnlSchema = v.object({
  // TODO: Add arpeg.anl attributes
});

export type AttrArpegAnlData = v.InferOutput<typeof AttrArpegAnlSchema>;
