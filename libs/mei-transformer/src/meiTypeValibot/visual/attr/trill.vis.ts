import * as v from "valibot";

/**
 * Attributes for trill.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trill.vis.html
 */
export const AttrTrillVisSchema = v.object({
  // TODO: Add trill.vis attributes
});

export type AttrTrillVisData = v.InferOutput<typeof AttrTrillVisSchema>;
