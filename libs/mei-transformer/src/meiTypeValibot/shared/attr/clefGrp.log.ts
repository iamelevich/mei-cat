import * as v from "valibot";

/**
 * Attributes for clef group logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clefGrp.log.html
 */
export const AttrClefGrpLogSchema = v.object({
  // TODO: Add clef group logging attributes
});

export type AttrClefGrpLogData = v.InferOutput<typeof AttrClefGrpLogSchema>;
