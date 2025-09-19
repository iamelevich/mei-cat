import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for TextLangSchema
 */
const TextLangBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * (main language) supplies a code which identifies the chief language used in the bibliographic work.
	 */
	"@lang.main": v.optional(v.string()),
	/**
	 * (other languages) one or more codes identifying any other languages used in the bibliographic work.
	 */
	"@lang.other": v.optional(v.string()),
});

/**
 * Identifies the languages and writing systems within the work described by a bibliographic description, not the language of the description.
 * @see https://music-encoding.org/guidelines/v5/elements/textLang.html
 */
export const TextLangSchema = v.intersect([
	TextLangBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type TextLangData = v.InferOutput<typeof TextLangSchema>;
