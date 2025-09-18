import * as v from "valibot";

/**
 * Attributes for syllable text.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sylText.html
 */
export const AttrSylTextSchema = v.object({
  // TODO: Add syllable text attributes
});

export type AttrSylTextData = v.InferOutput<typeof AttrSylTextSchema>;
