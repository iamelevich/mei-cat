import * as v from "valibot";

/**
 * Attributes for mensur.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.ges.html
 */
export const AttrMensurGesSchema = v.object({
  // TODO: Add mensur.ges attributes
});

export type AttrMensurGesData = v.InferOutput<typeof AttrMensurGesSchema>;
