import * as v from "valibot";

/**
 * Attributes for stageDir.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stageDir.vis.html
 */
export const AttrStageDirVisSchema = v.object({
  // TODO: Add stageDir.vis attributes
});

export type AttrStageDirVisData = v.InferOutput<typeof AttrStageDirVisSchema>;
