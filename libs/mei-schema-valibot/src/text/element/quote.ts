import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { SpSchema } from "../../drama/element/sp";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrTextRenditionSchema } from "../../shared/attr/textRendition";
import { AttrXySchema } from "../../shared/attr/xy";
import { ModelParacontentPartSchema } from "../../shared/model/paracontentPart";
import { ModelPLikeSchema } from "../../shared/model/pLike";

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
export const QuoteSchema = v.lazy(() =>
	v.intersect([
		QuoteBaseSchema,
		v.object({
			/**
			 * Reference to element sp
			 * @see https://music-encoding.org/guidelines/v5/elements/sp.html
			 */
			sp: v.optional(v.union([v.array(SpSchema), SpSchema])),
		}),
		ModelParacontentPartSchema,
		ModelPLikeSchema,
	]),
);

export type QuoteData = v.InferOutput<typeof QuoteSchema>;
