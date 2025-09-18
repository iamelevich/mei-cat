import * as v from "valibot";

/**
 * Attributes for coordinated elements with upper and lower bounds.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.ul.html
 */
export const AttrCoordinatedUlSchema = v.object({
  // TODO: Add coordinated upper/lower attributes
});

export type AttrCoordinatedUlData = v.InferOutput<typeof AttrCoordinatedUlSchema>;
