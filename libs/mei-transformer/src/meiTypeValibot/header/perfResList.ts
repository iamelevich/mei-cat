import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for perfResList element.
 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
 */
export const PerfResListSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PerfResListData = v.InferOutput<typeof PerfResListSchema>;
