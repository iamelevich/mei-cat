import { Type } from "typebox";

/**
 * Attributes that define the characteristics and components of the bibliographic description.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.recordType.html
 */
export const AttrRecordTypeSchema = Type.Object(
	{
		/**
		 * Allowed values are:
		 *   "a" (Language material.),
		 *   "c" (Notated music.),
		 *   "d" (Manuscript notated music.),
		 *   "e" (Non-manuscript cartographic material.),
		 *   "f" (Manuscript cartographic material.),
		 *   "g" (Projected medium.),
		 *   "i" (Nonmusical sound recording.),
		 *   "j" (Musical sound recording.),
		 *   "k" (Two-dimensional nonprojectable graphic.),
		 *   "m" (Computer file.),
		 *   "o" (Kit.),
		 *   "p" (Mixed materials.),
		 *   "r" (Three-dimensional artifact or naturally occurring object.),
		 *   "t" (Manuscript language material. )
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.recordType.html
		 */
		"@recordtype": Type.Optional(
			Type.Union([
				Type.Literal("a"),
				Type.Literal("c"),
				Type.Literal("d"),
				Type.Literal("e"),
				Type.Literal("f"),
				Type.Literal("g"),
				Type.Literal("i"),
				Type.Literal("j"),
				Type.Literal("k"),
				Type.Literal("m"),
				Type.Literal("o"),
				Type.Literal("p"),
				Type.Literal("r"),
				Type.Literal("t"),
			]),
		),
	},
	{ additionalProperties: false },
);
