import { Type } from "typebox";

/**
 * Attributes that identify metadata elements within the header.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metadataPointing.html
 */
export const AttrMetadataPointingSchema = Type.Object(
	{
		/**
		 * Identifies one or more metadata elements (other than classification terms) within the header, which are understood to apply to the element bearing this attribute and its content.
		 * One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metadataPointing.html#decls
		 */
		"@decls": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
