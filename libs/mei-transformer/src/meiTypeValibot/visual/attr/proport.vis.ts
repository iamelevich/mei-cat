import * as v from "valibot";

/**
 * Attributes for proport.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.proport.vis.html
 */
export const AttrProportVisSchema = v.object({
  // TODO: Add proport.vis attributes
});

export type AttrProportVisData = v.InferOutput<typeof AttrProportVisSchema>;
