import { Type } from "typebox";

/**
 * Attributes that record the number of dots of augmentation.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.augmentDots.html
 */
export const AttrAugmentDotsSchema = Type.Object(
	{
		/**
		 * Records the number of augmentation dots required by a written dotted duration. Value conforms to data.AUGMENTDOT
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.augmentDots.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.AUGMENTDOT.html
		 */
		"@dots": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
