import * as v from "valibot";

/**
 * Attributes for repeat mark logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.repeatMark.log.html
 */
export const AttrRepeatMarkLogSchema = v.object({
  // TODO: Add repeat mark logging attributes
});

export type AttrRepeatMarkLogData = v.InferOutput<typeof AttrRepeatMarkLogSchema>;
