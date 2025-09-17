import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for relationList element.
 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
 */
export const RelationListSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type RelationListData = v.InferOutput<typeof RelationListSchema>;
