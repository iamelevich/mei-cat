import * as v from "valibot";

/**
 * Attributes for gliss.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.gliss.anl.html
 */
export const AttrGlissAnlSchema = v.object({
  // TODO: Add gliss.anl attributes
});

export type AttrGlissAnlData = v.InferOutput<typeof AttrGlissAnlSchema>;
