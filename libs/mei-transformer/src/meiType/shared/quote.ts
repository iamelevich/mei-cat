import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Contains material which is distinguished from the surrounding phrase-level text using quotation marks or a similar method. Use quote for block-level quotations.
 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
 */
export const QuoteSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
]);

