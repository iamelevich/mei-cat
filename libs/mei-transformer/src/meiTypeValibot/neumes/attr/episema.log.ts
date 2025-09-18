import * as v from "valibot";

/**
 * Attributes for episema.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.episema.log.html
 */
export const AttrEpisemaLogSchema = v.object({
  // TODO: Add episema.log attributes
});

export type AttrEpisemaLogData = v.InferOutput<typeof AttrEpisemaLogSchema>;
