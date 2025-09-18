import * as v from "valibot";

/**
 * Attributes for signifLet.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.signifLet.vis.html
 */
export const AttrSignifLetVisSchema = v.object({
  // TODO: Add signifLet.vis attributes
});

export type AttrSignifLetVisData = v.InferOutput<typeof AttrSignifLetVisSchema>;
