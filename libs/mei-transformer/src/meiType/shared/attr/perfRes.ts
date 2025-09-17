import { Type } from "typebox";

/**
 * Attributes for performance resources.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.html
 */
export const AttrPerfResSchema = Type.Object(
	{
		/**
		 * Marks a performance resource as ad libitum (optional). Value conforms to data.BOOLEAN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.html#adlib
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
		 */
		"@adlib": Type.Optional(Type.Boolean()),
		/**
		 * Indicates the number of performers. Value is a positive integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.html#count
		 */
		"@count": Type.Optional(Type.Number()),
		/**
		 * Use this attribute to identify the performance resource as a soloist especially in an accompanied work, such as a concerto or vocal solo. Value conforms to data.BOOLEAN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.html#solo
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
		 */
		"@solo": Type.Optional(Type.Boolean()),
		/**
		 * Records the amount of diatonic pitch shift, e.g., C to C♯ = 0, C to D♭ = 1, necessary to calculate the sounded pitch from the written one. Value is an integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.html#trans.diat
		 */
		"@trans.diat": Type.Optional(Type.Number()),
		/**
		 * Records the amount of pitch shift in semitones, e.g., C to C♯ = 1, C to D♭ = 1, necessary to calculate the sounded pitch from the written one. Value is an integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.html#trans.semi
		 */
		"@trans.semi": Type.Optional(Type.Number()),
	},
	{ additionalProperties: false },
);
