import * as v from "valibot";

/**
 * Attributes for part identification.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.partIdent.html
 */
export const AttrPartIdentSchema = v.object({
  // TODO: Add part identification attributes
});

export type AttrPartIdentData = v.InferOutput<typeof AttrPartIdentSchema>;
