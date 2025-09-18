import * as v from "valibot";

/**
 * Attributes for rest.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.ges.html
 */
export const AttrRestGesSchema = v.object({
  // TODO: Add rest.ges attributes
});

export type AttrRestGesData = v.InferOutput<typeof AttrRestGesSchema>;
