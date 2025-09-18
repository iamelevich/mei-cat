import * as v from "valibot";

/**
 * Attributes for name.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.name.html
 */
export const AttrNameSchema = v.object({
  // TODO: Add name attributes
});

export type AttrNameData = v.InferOutput<typeof AttrNameSchema>;
