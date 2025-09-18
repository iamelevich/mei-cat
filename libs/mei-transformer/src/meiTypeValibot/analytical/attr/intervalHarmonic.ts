import * as v from "valibot";

/**
 * Attributes for intervalHarmonic.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.intervalHarmonic.html
 */
export const AttrIntervalHarmonicSchema = v.object({
  // TODO: Add intervalHarmonic attributes
});

export type AttrIntervalHarmonicData = v.InferOutput<typeof AttrIntervalHarmonicSchema>;
