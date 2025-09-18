import * as v from "valibot";

/**
 * Attributes for fTrem.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fTrem.anl.html
 */
export const AttrFTremAnlSchema = v.object({
  // TODO: Add fTrem.anl attributes
});

export type AttrFTremAnlData = v.InferOutput<typeof AttrFTremAnlSchema>;
