import * as v from "valibot";

/**
 * Attributes for harmony logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harm.log.html
 */
export const AttrHarmLogSchema = v.object({
  // TODO: Add harm.log attributes
});

export type AttrHarmLogData = v.InferOutput<typeof AttrHarmLogSchema>;
