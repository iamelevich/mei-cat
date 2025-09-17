import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for termList element.
 * @see https://music-encoding.org/guidelines/v5/elements/termList.html
 */
export const TermListSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type TermListData = v.InferOutput<typeof TermListSchema>;
