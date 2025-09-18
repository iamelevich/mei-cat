import * as v from "valibot";

/**
 * Attributes for mNum.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mNum.ges.html
 */
export const AttrMNumGesSchema = v.object({
  // TODO: Add mNum.ges attributes
});

export type AttrMNumGesData = v.InferOutput<typeof AttrMNumGesSchema>;
