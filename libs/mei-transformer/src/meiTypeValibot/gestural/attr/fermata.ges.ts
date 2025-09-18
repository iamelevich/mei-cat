import * as v from "valibot";

/**
 * Attributes for fermata.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermata.ges.html
 */
export const AttrFermataGesSchema = v.object({
  // TODO: Add fermata.ges attributes
});

export type AttrFermataGesData = v.InferOutput<typeof AttrFermataGesSchema>;
