import * as v from "valibot";

/**
 * Attributes for episema.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.episema.anl.html
 */
export const AttrEpisemaAnlSchema = v.object({
  // TODO: Add episema.anl attributes
});

export type AttrEpisemaAnlData = v.InferOutput<typeof AttrEpisemaAnlSchema>;
