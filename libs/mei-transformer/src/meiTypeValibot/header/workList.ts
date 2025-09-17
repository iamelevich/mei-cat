import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for workList element.
 * @see https://music-encoding.org/guidelines/v5/elements/workList.html
 */
export const WorkListSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type WorkListData = v.InferOutput<typeof WorkListSchema>;
