import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrTextRenditionSchema,
	AttrXySchema,
	ModelParacontentPartSchema,
	ModelPLikeSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { SpSchema } from "../../drama";

/**
 * Base schema with attribute, to simplify types for QuoteSchema
 */
const QuoteBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTextRenditionSchema.entries,
	...AttrXySchema.entries,
});

/**
 * Contains a paragraph-like block of text attributed to an external source, normally set off from the surrounding text by spacing or other typographic distinction.
 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
 */
export const QuoteSchema = v.intersect([
	QuoteBaseSchema,
	v.object({
		/**
		 * Reference to element sp
		 * @see https://music-encoding.org/guidelines/v5/elements/sp.html
		 */
		sp: v.optional(
			v.union([v.lazy(() => SpSchema), v.array(v.lazy(() => SpSchema))]),
		),
	}),
	ModelParacontentPartSchema,
	ModelPLikeSchema,
]);

export type QuoteData = v.InferOutput<typeof QuoteSchema>;
