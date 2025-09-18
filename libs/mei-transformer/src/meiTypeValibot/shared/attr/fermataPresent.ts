import * as v from "valibot";

/**
 * Attributes for fermata present.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermataPresent.html
 */
export const AttrFermataPresentSchema = v.object({
  // TODO: Add fermata present attributes
});

export type AttrFermataPresentData = v.InferOutput<typeof AttrFermataPresentSchema>;
