import * as v from "valibot";

/**
 * Attributes for barLine.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.ges.html
 */
export const AttrBarLineGesSchema = v.object({
  // TODO: Add barLine.ges attributes
});

export type AttrBarLineGesData = v.InferOutput<typeof AttrBarLineGesSchema>;
