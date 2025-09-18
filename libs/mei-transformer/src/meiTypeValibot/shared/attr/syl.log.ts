import * as v from "valibot";

/**
 * Attributes for syllable logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syl.log.html
 */
export const AttrSylLogSchema = v.object({
  // TODO: Add syllable logging attributes
});

export type AttrSylLogData = v.InferOutput<typeof AttrSylLogSchema>;
