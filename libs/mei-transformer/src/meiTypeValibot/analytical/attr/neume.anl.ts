import * as v from "valibot";

/**
 * Attributes for neume.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.neume.anl.html
 */
export const AttrNeumeAnlSchema = v.object({
  // TODO: Add neume.anl attributes
});

export type AttrNeumeAnlData = v.InferOutput<typeof AttrNeumeAnlSchema>;
