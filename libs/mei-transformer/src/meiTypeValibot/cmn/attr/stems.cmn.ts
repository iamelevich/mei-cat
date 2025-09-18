import * as v from "valibot";

/**
 * Attributes for stems.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stems.cmn.html
 */
export const AttrStemsCmnSchema = v.object({
  // TODO: Add stems.cmn attributes
});

export type AttrStemsCmnData = v.InferOutput<typeof AttrStemsCmnSchema>;
