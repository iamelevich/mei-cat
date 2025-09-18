import * as v from "valibot";

/**
 * Attributes for syllable.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syllable.vis.html
 */
export const AttrSyllableVisSchema = v.object({
  // TODO: Add syllable.vis attributes
});

export type AttrSyllableVisData = v.InferOutput<typeof AttrSyllableVisSchema>;
