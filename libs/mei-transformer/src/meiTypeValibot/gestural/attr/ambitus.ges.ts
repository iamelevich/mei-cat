import * as v from "valibot";

/**
 * Attributes for ambitus.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambitus.ges.html
 */
export const AttrAmbitusGesSchema = v.object({
  // TODO: Add ambitus.ges attributes
});

export type AttrAmbitusGesData = v.InferOutput<typeof AttrAmbitusGesSchema>;
