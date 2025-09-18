import * as v from "valibot";

/**
 * Attributes for stageDir.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stageDir.anl.html
 */
export const AttrStageDirAnlSchema = v.object({
  // TODO: Add stageDir.anl attributes
});

export type AttrStageDirAnlData = v.InferOutput<typeof AttrStageDirAnlSchema>;
