import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for symbol element.
 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
 */
export const SymbolSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SymbolData = v.InferOutput<typeof SymbolSchema>;
