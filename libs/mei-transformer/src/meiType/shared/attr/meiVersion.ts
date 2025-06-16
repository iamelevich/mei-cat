import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes used to specify the version of MEI used.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meiVersion.html
 */
export const AttrMeiVersionSchema = Type.Object(
	{
		/**
		 * Specifies a generic MEI version label. Allowed values are: "5.1" (Version of MEI), "5.1+anyStart" (Version of MEI all_anyStart customization),
		 * "5.1+basic" (Version of MEI basic customization), "5.1+CMN" (Version of MEI cmn customization),
		 * "5.1+Mensural" (Version of MEI mensural customization), "5.1+Neumes" (Version of MEI neumes customization)
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meiVersion.html
		 */
		"@meiversion": Type.String(),
	},
	{ additionalProperties: false },
);

/**
 * Attributes used to specify the version of MEI used.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meiVersion.html
 */
export type AttrMeiVersion = Static<typeof AttrMeiVersionSchema>;
