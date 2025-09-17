import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for bibl element.
 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
 */
export const BiblSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type BiblData = v.InferOutput<typeof BiblSchema>;
