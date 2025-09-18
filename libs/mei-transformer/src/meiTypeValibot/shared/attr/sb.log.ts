import * as v from "valibot";

/**
 * Attributes for system break logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sb.log.html
 */
export const AttrSbLogSchema = v.object({
  // TODO: Add system break logging attributes
});

export type AttrSbLogData = v.InferOutput<typeof AttrSbLogSchema>;
