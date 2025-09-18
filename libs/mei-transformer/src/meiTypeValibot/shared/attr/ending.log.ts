import * as v from "valibot";

/**
 * Attributes for ending logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ending.log.html
 */
export const AttrEndingLogSchema = v.object({
  // TODO: Add ending logging attributes
});

export type AttrEndingLogData = v.InferOutput<typeof AttrEndingLogSchema>;
