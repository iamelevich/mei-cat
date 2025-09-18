import * as v from "valibot";

/**
 * Attributes for oriscus.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.oriscus.log.html
 */
export const AttrOriscusLogSchema = v.object({
  // TODO: Add oriscus.log attributes
});

export type AttrOriscusLogData = v.InferOutput<typeof AttrOriscusLogSchema>;
