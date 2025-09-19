import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for LanguageSchema
 */
const LanguageBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Description of a language used in the document.
 * @see https://music-encoding.org/guidelines/v5/elements/language.html
 */
export const LanguageSchema = v.intersect([
	LanguageBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type LanguageData = v.InferOutput<typeof LanguageSchema>;
