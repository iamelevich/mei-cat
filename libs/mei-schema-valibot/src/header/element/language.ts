import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";

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
export const LanguageSchema = v.lazy(() =>
	v.intersect([LanguageBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type LanguageData = v.InferOutput<typeof LanguageSchema>;
