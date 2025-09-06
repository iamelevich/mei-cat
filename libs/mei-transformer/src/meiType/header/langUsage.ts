import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { HeadSchema } from "../shared/head";
import { LanguageSchema } from "./language";

/**
 * Groups elements describing the languages, sub-languages, dialects, etc., represented within the encoded resource.
 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
 */
export const LangUsageSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			/**
			 * Description of a language used in the document.
			 * @see https://music-encoding.org/guidelines/v5/elements/language.html
			 */
			language: Type.Union([LanguageSchema, Type.Array(LanguageSchema)]),
		},
		{ additionalProperties: false },
	),
]);

export type LangUsage = Static<typeof LangUsageSchema>;
