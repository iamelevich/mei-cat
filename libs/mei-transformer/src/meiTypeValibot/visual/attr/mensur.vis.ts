import * as v from "valibot";

/**
 * Attributes for mensur.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.vis.html
 */
export const AttrMensurVisSchema = v.object({
  // TODO: Add mensur.vis attributes
});

export type AttrMensurVisData = v.InferOutput<typeof AttrMensurVisSchema>;
