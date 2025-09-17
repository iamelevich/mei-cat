import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for biblList element.
 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
 */
export const BiblListSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type BiblListData = v.InferOutput<typeof BiblListSchema>;
