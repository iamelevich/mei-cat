import * as v from "valibot";

/**
 * Attributes for episema.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.episema.ges.html
 */
export const AttrEpisemaGesSchema = v.object({
  // TODO: Add episema.ges attributes
});

export type AttrEpisemaGesData = v.InferOutput<typeof AttrEpisemaGesSchema>;
