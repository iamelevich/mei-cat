import * as v from "valibot";

/**
 * Attributes for beamSpan.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamSpan.anl.html
 */
export const AttrBeamSpanAnlSchema = v.object({
  // TODO: Add beamSpan.anl attributes
});

export type AttrBeamSpanAnlData = v.InferOutput<typeof AttrBeamSpanAnlSchema>;
