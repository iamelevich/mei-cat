import * as v from "valibot";

/**
 * Attributes for distances.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.distances.html
 */
export const AttrDistancesSchema = v.object({
  // TODO: Add distances attributes
});

export type AttrDistancesData = v.InferOutput<typeof AttrDistancesSchema>;
