import * as v from "valibot";

/**
 * Attributes for strophicus.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.strophicus.log.html
 */
export const AttrStrophicusLogSchema = v.object({
  // TODO: Add strophicus.log attributes
});

export type AttrStrophicusLogData = v.InferOutput<typeof AttrStrophicusLogSchema>;
