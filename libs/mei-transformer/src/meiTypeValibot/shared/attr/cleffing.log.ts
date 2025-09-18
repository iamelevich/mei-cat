import * as v from "valibot";

/**
 * Attributes for cleffing logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cleffing.log.html
 */
export const AttrCleffingLogSchema = v.object({
  // TODO: Add cleffing logging attributes
});

export type AttrCleffingLogData = v.InferOutput<typeof AttrCleffingLogSchema>;
