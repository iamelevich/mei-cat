import * as v from "valibot";

/**
 * Attributes for sequence.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sequence.html
 */
export const AttrSequenceSchema = v.object({
  // TODO: Add sequence attributes
});

export type AttrSequenceData = v.InferOutput<typeof AttrSequenceSchema>;
