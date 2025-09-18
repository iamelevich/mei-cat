import * as v from "valibot";

/**
 * Attributes for pedal.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pedal.anl.html
 */
export const AttrPedalAnlSchema = v.object({
  // TODO: Add pedal.anl attributes
});

export type AttrPedalAnlData = v.InferOutput<typeof AttrPedalAnlSchema>;
