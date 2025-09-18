import * as v from "valibot";

/**
 * Attributes for stem.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stem.anl.html
 */
export const AttrStemAnlSchema = v.object({
  // TODO: Add stem.anl attributes
});

export type AttrStemAnlData = v.InferOutput<typeof AttrStemAnlSchema>;
