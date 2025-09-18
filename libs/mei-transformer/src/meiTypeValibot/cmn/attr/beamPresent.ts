import * as v from "valibot";

/**
 * Attributes for beamPresent.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamPresent.html
 */
export const AttrBeamPresentSchema = v.object({
  // TODO: Add beamPresent attributes
});

export type AttrBeamPresentData = v.InferOutput<typeof AttrBeamPresentSchema>;
