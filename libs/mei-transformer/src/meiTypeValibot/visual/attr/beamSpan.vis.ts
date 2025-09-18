import * as v from "valibot";

/**
 * Attributes for beamSpan.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamSpan.vis.html
 */
export const AttrBeamSpanVisSchema = v.object({
  // TODO: Add beamSpan.vis attributes
});

export type AttrBeamSpanVisData = v.InferOutput<typeof AttrBeamSpanVisSchema>;
