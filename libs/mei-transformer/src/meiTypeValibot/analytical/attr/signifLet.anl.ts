import * as v from "valibot";

/**
 * Attributes for signifLet.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.signifLet.anl.html
 */
export const AttrSignifLetAnlSchema = v.object({
  // TODO: Add signifLet.anl attributes
});

export type AttrSignifLetAnlData = v.InferOutput<typeof AttrSignifLetAnlSchema>;
