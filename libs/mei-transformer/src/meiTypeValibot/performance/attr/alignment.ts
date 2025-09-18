import * as v from "valibot";

/**
 * Attributes for alignment.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.alignment.html
 */
export const AttrAlignmentSchema = v.object({
  // TODO: Add alignment attributes
});

export type AttrAlignmentData = v.InferOutput<typeof AttrAlignmentSchema>;
