import * as v from "valibot";

/**
 * Attributes for foliation.scheme.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.foliation.scheme.html
 */
export const AttrFoliationSchemeSchema = v.object({
  // TODO: Add foliation.scheme attributes
});

export type AttrFoliationSchemeData = v.InferOutput<typeof AttrFoliationSchemeSchema>;
