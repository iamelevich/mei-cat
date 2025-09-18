import * as v from "valibot";

/**
 * Attributes for figured bass logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.f.log.html
 */
export const AttrFLogSchema = v.object({
  // TODO: Add f.log attributes
});

export type AttrFLogData = v.InferOutput<typeof AttrFLogSchema>;
