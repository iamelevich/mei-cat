import * as v from "valibot";

/**
 * Attributes for stageDir.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stageDir.log.html
 */
export const AttrStageDirLogSchema = v.object({
  // TODO: Add stageDir.log attributes
});

export type AttrStageDirLogData = v.InferOutput<typeof AttrStageDirLogSchema>;
