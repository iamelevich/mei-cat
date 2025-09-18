import * as v from "valibot";

/**
 * Attributes for transposition.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.transposition.html
 */
export const AttrTranspositionSchema = v.object({
  // TODO: Add transposition attributes
});

export type AttrTranspositionData = v.InferOutput<typeof AttrTranspositionSchema>;
