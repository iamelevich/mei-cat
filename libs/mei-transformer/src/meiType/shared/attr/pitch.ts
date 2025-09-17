import { Type } from "typebox";

/**
 * Attributes for describing pitch.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pitch.html
 */
export const AttrPitchSchema = Type.Object(
	{
		/**
		 * Contains a written pitch name. Value conforms to data.PITCHNAME.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pitch.html#pname
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.PITCHNAME.html
		 */
		"@pname": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
