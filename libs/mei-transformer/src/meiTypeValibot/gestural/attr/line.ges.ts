import * as v from "valibot";

/**
 * Attributes for line.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.line.ges.html
 */
export const AttrLineGesSchema = v.object({
  // TODO: Add line.ges attributes
});

export type AttrLineGesData = v.InferOutput<typeof AttrLineGesSchema>;
