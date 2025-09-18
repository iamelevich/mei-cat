import * as v from "valibot";

/**
 * Attributes for slur.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slur.log.html
 */
export const AttrSlurLogSchema = v.object({
  // TODO: Add slur.log attributes
});

export type AttrSlurLogData = v.InferOutput<typeof AttrSlurLogSchema>;
