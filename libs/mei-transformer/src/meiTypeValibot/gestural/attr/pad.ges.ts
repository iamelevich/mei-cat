import * as v from "valibot";

/**
 * Attributes for pad.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pad.ges.html
 */
export const AttrPadGesSchema = v.object({
  // TODO: Add pad.ges attributes
});

export type AttrPadGesData = v.InferOutput<typeof AttrPadGesSchema>;
