import * as v from "valibot";

/**
 * Attributes for tie present.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tiePresent.html
 */
export const AttrTiePresentSchema = v.object({
  // TODO: Add tie present attributes
});

export type AttrTiePresentData = v.InferOutput<typeof AttrTiePresentSchema>;
