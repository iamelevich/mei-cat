import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes that record visual offsets.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.html
 */
export const AttrVisualOffsetSchema = Type.Object(
	{
		/**
		 * Records a horizontal adjustment to a feature's programmatically-determined location in terms of staff interline distance; that is, in units of 1/2 the distance between adjacent staff lines.
		 * Value conforms to data.MEASUREMENTSIGNED.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.html#ho
		 */
		"@ho": Type.Optional(Type.String()),

		/**
		 * Records a timestamp adjustment of a feature's programmatically-determined location in terms of musical time; that is, beats.
		 * Value conforms to data.TSTAMPOFFSET.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.html#to
		 */
		"@to": Type.Optional(Type.String()),

		/**
		 * Records the vertical adjustment of a feature's programmatically-determined location in terms of staff interline distance; that is, in units of 1/2 the distance between adjacent staff lines.
		 * Value conforms to data.MEASUREMENTSIGNED.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.html#vo
		 */
		"@vo": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

/**
 * Attributes that record visual offsets.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.html
 */
export type AttrVisualOffset = Static<typeof AttrVisualOffsetSchema>;
