import * as v from "valibot";

/**
 * Attributes for neume.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.neume.log.html
 */
export const AttrNeumeLogSchema = v.object({
  // TODO: Add neume.log attributes
});

export type AttrNeumeLogData = v.InferOutput<typeof AttrNeumeLogSchema>;
