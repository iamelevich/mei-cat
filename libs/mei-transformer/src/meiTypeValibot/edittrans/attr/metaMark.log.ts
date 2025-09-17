import * as v from "valibot";

/**
 * Attributes for meta mark logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metaMark.log.html
 */
export const AttrMetaMarkLogSchema = v.object({
  // TODO: Add metaMark.log attributes
});

export type AttrMetaMarkLogData = v.InferOutput<typeof AttrMetaMarkLogSchema>;
