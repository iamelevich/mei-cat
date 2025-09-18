import * as v from "valibot";

/**
 * Attributes for line rendering.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lineRend.html
 */
export const AttrLineRendSchema = v.object({
  // TODO: Add line rendering attributes
});

export type AttrLineRendData = v.InferOutput<typeof AttrLineRendSchema>;
