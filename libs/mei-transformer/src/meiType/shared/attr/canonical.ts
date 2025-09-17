import { Type } from "typebox";

/**
 * Attributes that can be used to associate a representation such as a name or title with canonical information about the object being named or referenced.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.canonical.html
 */
export const AttrCanonicalSchema = Type.Object(
	{
		/**
		 * A value that represents or identifies other data.
		 * Often, it is a primary key in the database or a unique value in the coded list identified by the auth or auth.uri attributes.
		 * One or more values of datatype NMTOKEN, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.canonical.html
		 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
		 */
		"@codedval": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
