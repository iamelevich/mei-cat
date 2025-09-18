import * as v from "valibot";

/**
 * Attributes for refrain.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.refrain.ges.html
 */
export const AttrRefrainGesSchema = v.object({
  // TODO: Add refrain.ges attributes
});

export type AttrRefrainGesData = v.InferOutput<typeof AttrRefrainGesSchema>;
