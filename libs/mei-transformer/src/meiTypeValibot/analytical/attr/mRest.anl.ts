import * as v from "valibot";

/**
 * Attributes for mRest.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRest.anl.html
 */
export const AttrMRestAnlSchema = v.object({
  // TODO: Add mRest.anl attributes
});

export type AttrMRestAnlData = v.InferOutput<typeof AttrMRestAnlSchema>;
