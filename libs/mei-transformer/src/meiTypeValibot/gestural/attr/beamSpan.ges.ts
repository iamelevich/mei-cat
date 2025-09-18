import * as v from "valibot";

/**
 * Attributes for beamSpan.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamSpan.ges.html
 */
export const AttrBeamSpanGesSchema = v.object({
  // TODO: Add beamSpan.ges attributes
});

export type AttrBeamSpanGesData = v.InferOutput<typeof AttrBeamSpanGesSchema>;
