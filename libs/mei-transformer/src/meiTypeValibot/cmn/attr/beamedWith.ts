import * as v from "valibot";

/**
 * Attributes for beamedWith.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamedWith.html
 */
export const AttrBeamedWithSchema = v.object({
  // TODO: Add beamedWith attributes
});

export type AttrBeamedWithData = v.InferOutput<typeof AttrBeamedWithSchema>;
