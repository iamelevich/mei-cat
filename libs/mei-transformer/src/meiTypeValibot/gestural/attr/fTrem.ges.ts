import * as v from "valibot";

/**
 * Attributes for fTrem.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fTrem.ges.html
 */
export const AttrFTremGesSchema = v.object({
  // TODO: Add fTrem.ges attributes
});

export type AttrFTremGesData = v.InferOutput<typeof AttrFTremGesSchema>;
