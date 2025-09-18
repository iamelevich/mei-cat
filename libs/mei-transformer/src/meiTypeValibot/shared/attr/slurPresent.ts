import * as v from "valibot";

/**
 * Attributes for slur present.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slurPresent.html
 */
export const AttrSlurPresentSchema = v.object({
  // TODO: Add slur present attributes
});

export type AttrSlurPresentData = v.InferOutput<typeof AttrSlurPresentSchema>;
