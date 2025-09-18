import * as v from "valibot";

/**
 * Attributes for mensur.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.anl.html
 */
export const AttrMensurAnlSchema = v.object({
  // TODO: Add mensur.anl attributes
});

export type AttrMensurAnlData = v.InferOutput<typeof AttrMensurAnlSchema>;
