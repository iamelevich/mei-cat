import * as v from "valibot";

/**
 * Attributes for sb.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sb.vis.html
 */
export const AttrSbVisSchema = v.object({
  // TODO: Add sb.vis attributes
});

export type AttrSbVisData = v.InferOutput<typeof AttrSbVisSchema>;
