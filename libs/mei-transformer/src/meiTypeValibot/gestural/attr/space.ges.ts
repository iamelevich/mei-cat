import * as v from "valibot";

/**
 * Attributes for space.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.space.ges.html
 */
export const AttrSpaceGesSchema = v.object({
  // TODO: Add space.ges attributes
});

export type AttrSpaceGesData = v.InferOutput<typeof AttrSpaceGesSchema>;
