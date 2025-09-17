import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Groups information about applications which have acted upon the MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/appInfo.html
 */
export const AppInfoSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Ref("head")),
			/**
			 * Provides information about an application which has acted upon the current document.
			 * @see https://music-encoding.org/guidelines/v5/elements/application.html
			 */
			application: Type.Optional(Type.Ref("application")),
		},
		{ additionalProperties: false },
	),
]);
