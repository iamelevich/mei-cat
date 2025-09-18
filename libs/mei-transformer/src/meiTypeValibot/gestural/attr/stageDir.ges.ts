import * as v from "valibot";

/**
 * Attributes for stageDir.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stageDir.ges.html
 */
export const AttrStageDirGesSchema = v.object({
  // TODO: Add stageDir.ges attributes
});

export type AttrStageDirGesData = v.InferOutput<typeof AttrStageDirGesSchema>;
