import * as v from "valibot";

/**
 * Attributes for bTrem.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bTrem.ges.html
 */
export const AttrBTremGesSchema = v.object({
  // TODO: Add bTrem.ges attributes
});

export type AttrBTremGesData = v.InferOutput<typeof AttrBTremGesSchema>;
