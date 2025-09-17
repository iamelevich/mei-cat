import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for term element.
 * @see https://music-encoding.org/guidelines/v5/elements/term.html
 */
export const TermSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type TermData = v.InferOutput<typeof TermSchema>;
