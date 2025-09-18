import * as v from "valibot";

/**
 * Attributes for hand identification.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.handIdent.html
 */
export const AttrHandIdentSchema = v.object({
  // TODO: Add hand identification attributes
});

export type AttrHandIdentData = v.InferOutput<typeof AttrHandIdentSchema>;
