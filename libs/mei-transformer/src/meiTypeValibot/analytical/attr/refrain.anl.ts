import * as v from "valibot";

/**
 * Attributes for refrain.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.refrain.anl.html
 */
export const AttrRefrainAnlSchema = v.object({
  // TODO: Add refrain.anl attributes
});

export type AttrRefrainAnlData = v.InferOutput<typeof AttrRefrainAnlSchema>;
