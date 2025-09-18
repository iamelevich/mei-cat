import * as v from "valibot";

/**
 * Attributes for tuplet present.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tupletPresent.html
 */
export const AttrTupletPresentSchema = v.object({
  // TODO: Add tuplet present attributes
});

export type AttrTupletPresentData = v.InferOutput<typeof AttrTupletPresentSchema>;
