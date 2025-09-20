import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { LanguageSchema } from "./language";

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
export const LangUsageSchema = v.lazy(() =>
	v.intersect([
		LangUsageBaseSchema,
		v.object({
			/**
			 * Reference to element language
			 * @see https://music-encoding.org/guidelines/v5/elements/language.html
			 */
			language: v.optional(v.union([v.array(LanguageSchema), LanguageSchema])),
		}),
		ModelHeadLikeSchema,
	]),
);

export type LangUsageData = v.InferOutput<typeof LangUsageSchema>;
