import * as v from "valibot";

/**
 * Attributes for extSym.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extSym.html
 */
export const AttrExtSymSchema = v.object({
  // TODO: Add extSym attributes
});

export type AttrExtSymData = v.InferOutput<typeof AttrExtSymSchema>;
