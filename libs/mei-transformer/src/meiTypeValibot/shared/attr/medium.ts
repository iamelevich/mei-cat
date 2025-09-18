import * as v from "valibot";

/**
 * Attributes for medium.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.medium.html
 */
export const AttrMediumSchema = v.object({
  // TODO: Add medium attributes
});

export type AttrMediumData = v.InferOutput<typeof AttrMediumSchema>;
