import * as v from "valibot";

/**
 * Attributes for ambitus.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambitus.vis.html
 */
export const AttrAmbitusVisSchema = v.object({
  // TODO: Add ambitus.vis attributes
});

export type AttrAmbitusVisData = v.InferOutput<typeof AttrAmbitusVisSchema>;
