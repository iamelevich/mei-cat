import * as v from "valibot";

/**
 * Attributes for augment dots.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.augmentDots.html
 */
export const AttrAugmentDotsSchema = v.object({
  // TODO: Add augment dots attributes
});

export type AttrAugmentDotsData = v.InferOutput<typeof AttrAugmentDotsSchema>;
