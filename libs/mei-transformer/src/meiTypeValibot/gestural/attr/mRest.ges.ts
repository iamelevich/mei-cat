import * as v from "valibot";

/**
 * Attributes for mRest.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRest.ges.html
 */
export const AttrMRestGesSchema = v.object({
  // TODO: Add mRest.ges attributes
});

export type AttrMRestGesData = v.InferOutput<typeof AttrMRestGesSchema>;
