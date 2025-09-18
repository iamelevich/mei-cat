import * as v from "valibot";

/**
 * Attributes for soundLocation.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.soundLocation.html
 */
export const AttrSoundLocationSchema = v.object({
  // TODO: Add soundLocation attributes
});

export type AttrSoundLocationData = v.InferOutput<typeof AttrSoundLocationSchema>;
