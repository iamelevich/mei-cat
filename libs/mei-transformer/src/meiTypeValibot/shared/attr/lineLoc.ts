import * as v from "valibot";

/**
 * Attributes for line location.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lineLoc.html
 */
export const AttrLineLocSchema = v.object({
  // TODO: Add line location attributes
});

export type AttrLineLocData = v.InferOutput<typeof AttrLineLocSchema>;
