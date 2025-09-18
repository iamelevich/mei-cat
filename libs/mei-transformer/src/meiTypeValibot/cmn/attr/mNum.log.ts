import * as v from "valibot";

/**
 * Attributes for mNum.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mNum.log.html
 */
export const AttrMNumLogSchema = v.object({
  // TODO: Add mNum.log attributes
});

export type AttrMNumLogData = v.InferOutput<typeof AttrMNumLogSchema>;
