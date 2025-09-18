import * as v from "valibot";

/**
 * Attributes for pitchClass.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pitchClass.html
 */
export const AttrPitchClassSchema = v.object({
  // TODO: Add pitchClass attributes
});

export type AttrPitchClassData = v.InferOutput<typeof AttrPitchClassSchema>;
