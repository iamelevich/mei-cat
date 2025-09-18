import * as v from "valibot";

/**
 * Attributes for beamRend.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamRend.html
 */
export const AttrBeamRendSchema = v.object({
  // TODO: Add beamRend attributes
});

export type AttrBeamRendData = v.InferOutput<typeof AttrBeamRendSchema>;
