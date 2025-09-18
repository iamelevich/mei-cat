import * as v from "valibot";

/**
 * Attributes for mSpace.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mSpace.ges.html
 */
export const AttrMSpaceGesSchema = v.object({
  // TODO: Add mSpace.ges attributes
});

export type AttrMSpaceGesData = v.InferOutput<typeof AttrMSpaceGesSchema>;
