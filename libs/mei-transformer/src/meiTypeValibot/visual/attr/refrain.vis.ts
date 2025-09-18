import * as v from "valibot";

/**
 * Attributes for refrain.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.refrain.vis.html
 */
export const AttrRefrainVisSchema = v.object({
  // TODO: Add refrain.vis attributes
});

export type AttrRefrainVisData = v.InferOutput<typeof AttrRefrainVisSchema>;
