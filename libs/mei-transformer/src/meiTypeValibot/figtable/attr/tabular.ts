import * as v from "valibot";

/**
 * Attributes for tabular elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabular.html
 */
export const AttrTabularSchema = v.object({
  // TODO: Add tabular attributes
});

export type AttrTabularData = v.InferOutput<typeof AttrTabularSchema>;
