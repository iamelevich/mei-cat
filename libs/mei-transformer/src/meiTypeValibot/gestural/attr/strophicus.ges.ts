import * as v from "valibot";

/**
 * Attributes for strophicus.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.strophicus.ges.html
 */
export const AttrStrophicusGesSchema = v.object({
  // TODO: Add strophicus.ges attributes
});

export type AttrStrophicusGesData = v.InferOutput<typeof AttrStrophicusGesSchema>;
