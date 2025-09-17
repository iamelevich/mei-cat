import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for language element.
 * @see https://music-encoding.org/guidelines/v5/elements/language.html
 */
export const LanguageSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type LanguageData = v.InferOutput<typeof LanguageSchema>;
