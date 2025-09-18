import * as v from "valibot";

/**
 * Attributes for episema.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.episema.vis.html
 */
export const AttrEpisemaVisSchema = v.object({
  // TODO: Add episema.vis attributes
});

export type AttrEpisemaVisData = v.InferOutput<typeof AttrEpisemaVisSchema>;
