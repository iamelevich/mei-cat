import * as v from "valibot";

/**
 * Attributes for bend.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bend.ges.html
 */
export const AttrBendGesSchema = v.object({
  // TODO: Add bend.ges attributes
});

export type AttrBendGesData = v.InferOutput<typeof AttrBendGesSchema>;
