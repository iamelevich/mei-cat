import * as v from "valibot";

/**
 * Attributes for ambitus.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambitus.anl.html
 */
export const AttrAmbitusAnlSchema = v.object({
  // TODO: Add ambitus.anl attributes
});

export type AttrAmbitusAnlData = v.InferOutput<typeof AttrAmbitusAnlSchema>;
