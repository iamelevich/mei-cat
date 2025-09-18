import * as v from "valibot";

/**
 * Attributes for sp.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sp.ges.html
 */
export const AttrSpGesSchema = v.object({
  // TODO: Add sp.ges attributes
});

export type AttrSpGesData = v.InferOutput<typeof AttrSpGesSchema>;
