import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for handList element.
 * @see https://music-encoding.org/guidelines/v5/elements/handList.html
 */
export const HandListSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type HandListData = v.InferOutput<typeof HandListSchema>;
