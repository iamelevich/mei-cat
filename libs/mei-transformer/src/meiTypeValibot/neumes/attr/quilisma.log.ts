import * as v from "valibot";

/**
 * Attributes for quilisma.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.quilisma.log.html
 */
export const AttrQuilismaLogSchema = v.object({
  // TODO: Add quilisma.log attributes
});

export type AttrQuilismaLogData = v.InferOutput<typeof AttrQuilismaLogSchema>;
