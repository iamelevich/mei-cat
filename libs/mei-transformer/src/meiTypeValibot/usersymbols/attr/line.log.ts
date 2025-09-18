import * as v from "valibot";

/**
 * Attributes for line.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.line.log.html
 */
export const AttrLineLogSchema = v.object({
  // TODO: Add line.log attributes
});

export type AttrLineLogData = v.InferOutput<typeof AttrLineLogSchema>;
