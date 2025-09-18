import * as v from "valibot";

/**
 * Attributes for pad.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pad.anl.html
 */
export const AttrPadAnlSchema = v.object({
  // TODO: Add pad.anl attributes
});

export type AttrPadAnlData = v.InferOutput<typeof AttrPadAnlSchema>;
