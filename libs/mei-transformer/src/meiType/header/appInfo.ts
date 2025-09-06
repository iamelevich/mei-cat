import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { HeadSchema } from "../shared/head";
import { ApplicationSchema } from "./application";

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
			head: Type.Optional(HeadSchema),
			/**
			 * Provides information about an application which has acted upon the current document.
			 * @see https://music-encoding.org/guidelines/v5/elements/application.html
			 */
			application: Type.Optional(ApplicationSchema),
		},
		{ additionalProperties: false },
	),
]);

export type AppInfo = Static<typeof AppInfoSchema>;
