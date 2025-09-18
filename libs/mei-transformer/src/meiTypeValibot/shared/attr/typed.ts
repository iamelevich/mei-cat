import * as v from "valibot";

/**
 * Attributes for typed elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.typed.html
 */
export const AttrTypedSchema = v.object({
  // TODO: Add typed attributes
});

export type AttrTypedData = v.InferOutput<typeof AttrTypedSchema>;
