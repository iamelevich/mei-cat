import * as v from "valibot";

/**
 * Attributes for beamSecondary.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamSecondary.html
 */
export const AttrBeamSecondarySchema = v.object({
  // TODO: Add beamSecondary attributes
});

export type AttrBeamSecondaryData = v.InferOutput<typeof AttrBeamSecondarySchema>;
