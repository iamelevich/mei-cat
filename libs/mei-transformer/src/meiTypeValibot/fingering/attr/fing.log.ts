import * as v from "valibot";

/**
 * Attributes for fing.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fing.log.html
 */
export const AttrFingLogSchema = v.object({
  // TODO: Add fing.log attributes
});

export type AttrFingLogData = v.InferOutput<typeof AttrFingLogSchema>;
