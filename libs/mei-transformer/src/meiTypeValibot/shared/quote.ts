import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for quote element.
 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
 */
export const QuoteSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type QuoteData = v.InferOutput<typeof QuoteSchema>;
