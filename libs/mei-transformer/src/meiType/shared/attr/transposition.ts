import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes that describe transposition.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.transposition.html
 */
export const AttrTranspositionSchema = Type.Object(
	{
		/**
		 * Records the amount of diatonic pitch shift, e.g., C to C♯ = 0, C to D♭ = 1, necessary to calculate the sounded pitch from the written one.
		 * Value is an integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.transposition.html
		 */
		"@trans.diat": Type.Optional(Type.Integer()),
		/**
		 * Records the amount of pitch shift in semitones, e.g., C to C♯ = 1, C to D♭ = 1, necessary to calculate the sounded pitch from the written one.
		 * Value is an integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.transposition.html
		 */
		"@trans.semi": Type.Optional(Type.Integer()),
	},
	{ additionalProperties: false },
);

export type AttrTransposition = Static<typeof AttrTranspositionSchema>;
