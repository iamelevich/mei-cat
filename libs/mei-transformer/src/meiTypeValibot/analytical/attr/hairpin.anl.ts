import * as v from "valibot";

/**
 * Attributes for hairpin.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hairpin.anl.html
 */
export const AttrHairpinAnlSchema = v.object({
  // TODO: Add hairpin.anl attributes
});

export type AttrHairpinAnlData = v.InferOutput<typeof AttrHairpinAnlSchema>;
