import * as v from "valibot";

/**
 * Attributes for pb.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pb.vis.html
 */
export const AttrPbVisSchema = v.object({
  // TODO: Add pb.vis attributes
});

export type AttrPbVisData = v.InferOutput<typeof AttrPbVisSchema>;
