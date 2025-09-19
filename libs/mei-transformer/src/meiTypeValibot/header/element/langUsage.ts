import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	ModelHeadLikeSchema,
} from "../../shared";
import { LanguageSchema } from ".";

/**
 * Base schema with attribute, to simplify types for LangUsageSchema
 */
const LangUsageBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
});

/**
 * Groups elements describing the languages, sub-languages, dialects, etc., represented within the encoded resource.
 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
 */
export const LangUsageSchema = v.intersect([
	LangUsageBaseSchema,
	v.object({
		/**
		 * Reference to element language
		 * @see https://music-encoding.org/guidelines/v5/elements/language.html
		 */
		language: v.union([
			v.lazy(() => LanguageSchema),
			v.array(v.lazy(() => LanguageSchema)),
		]),
	}),
	ModelHeadLikeSchema,
]);

export type LangUsageData = v.InferOutput<typeof LangUsageSchema>;
