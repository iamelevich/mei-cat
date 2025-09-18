import * as v from "valibot";

/**
 * Attributes for direction logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dir.log.html
 */
export const AttrDirLogSchema = v.object({
  // TODO: Add direction logging attributes
});

export type AttrDirLogData = v.InferOutput<typeof AttrDirLogSchema>;
