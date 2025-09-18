import * as v from "valibot";

/**
 * Attributes for harm.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harm.vis.html
 */
export const AttrHarmVisSchema = v.object({
  // TODO: Add harm.vis attributes
});

export type AttrHarmVisData = v.InferOutput<typeof AttrHarmVisSchema>;
