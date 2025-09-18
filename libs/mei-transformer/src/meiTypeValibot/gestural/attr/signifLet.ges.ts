import * as v from "valibot";

/**
 * Attributes for signifLet.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.signifLet.ges.html
 */
export const AttrSignifLetGesSchema = v.object({
  // TODO: Add signifLet.ges attributes
});

export type AttrSignifLetGesData = v.InferOutput<typeof AttrSignifLetGesSchema>;
