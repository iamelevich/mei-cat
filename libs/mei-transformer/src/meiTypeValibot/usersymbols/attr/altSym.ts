import * as v from "valibot";

/**
 * Attributes for altSym.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.altSym.html
 */
export const AttrAltSymSchema = v.object({
  // TODO: Add altSym attributes
});

export type AttrAltSymData = v.InferOutput<typeof AttrAltSymSchema>;
