import * as v from "valibot";

/**
 * Attributes for ornam.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornam.ges.html
 */
export const AttrOrnamGesSchema = v.object({
  // TODO: Add ornam.ges attributes
});

export type AttrOrnamGesData = v.InferOutput<typeof AttrOrnamGesSchema>;
