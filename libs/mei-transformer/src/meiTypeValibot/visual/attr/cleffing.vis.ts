import * as v from "valibot";

/**
 * Attributes for cleffing.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cleffing.vis.html
 */
export const AttrCleffingVisSchema = v.object({
  // TODO: Add cleffing.vis attributes
});

export type AttrCleffingVisData = v.InferOutput<typeof AttrCleffingVisSchema>;
