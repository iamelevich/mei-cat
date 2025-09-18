import * as v from "valibot";

/**
 * Attributes for dynam.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dynam.ges.html
 */
export const AttrDynamGesSchema = v.object({
  // TODO: Add dynam.ges attributes
});

export type AttrDynamGesData = v.InferOutput<typeof AttrDynamGesSchema>;
