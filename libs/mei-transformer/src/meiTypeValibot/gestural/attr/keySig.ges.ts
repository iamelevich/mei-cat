import * as v from "valibot";

/**
 * Attributes for keySig.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySig.ges.html
 */
export const AttrKeySigGesSchema = v.object({
  // TODO: Add keySig.ges attributes
});

export type AttrKeySigGesData = v.InferOutput<typeof AttrKeySigGesSchema>;
