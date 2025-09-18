import * as v from "valibot";

/**
 * Attributes for breath.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.breath.log.html
 */
export const AttrBreathLogSchema = v.object({
  // TODO: Add breath.log attributes
});

export type AttrBreathLogData = v.InferOutput<typeof AttrBreathLogSchema>;
