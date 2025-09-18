import * as v from "valibot";

/**
 * Attributes for beamSpan.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamSpan.log.html
 */
export const AttrBeamSpanLogSchema = v.object({
  // TODO: Add beamSpan.log attributes
});

export type AttrBeamSpanLogData = v.InferOutput<typeof AttrBeamSpanLogSchema>;
