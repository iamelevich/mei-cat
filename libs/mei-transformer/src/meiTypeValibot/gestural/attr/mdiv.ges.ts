import * as v from "valibot";

/**
 * Attributes for mdiv.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mdiv.ges.html
 */
export const AttrMdivGesSchema = v.object({
  // TODO: Add mdiv.ges attributes
});

export type AttrMdivGesData = v.InferOutput<typeof AttrMdivGesSchema>;
