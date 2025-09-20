import * as v from "valibot";

/**
 * Attributes that record the number of dots of augmentation..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.augmentDots.html
 */
export const AttrAugmentDotsSchema = v.object({
	// Direct attributes
	/**
	 * Records the number of augmentation dots required by a written dotted duration.
	 */
	"@dots": v.optional(v.string()),
});

export type AttrAugmentDotsData = v.InferOutput<typeof AttrAugmentDotsSchema>;
