import * as v from "valibot";

/**
 * Attributes for bTrem.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bTrem.anl.html
 */
export const AttrBTremAnlSchema = v.object({
  // TODO: Add bTrem.anl attributes
});

export type AttrBTremAnlData = v.InferOutput<typeof AttrBTremAnlSchema>;
