import * as v from "valibot";

/**
 * Attributes for caesura.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.caesura.anl.html
 */
export const AttrCaesuraAnlSchema = v.object({
  // TODO: Add caesura.anl attributes
});

export type AttrCaesuraAnlData = v.InferOutput<typeof AttrCaesuraAnlSchema>;
