import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for work element.
 * @see https://music-encoding.org/guidelines/v5/elements/work.html
 */
export const WorkSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type WorkData = v.InferOutput<typeof WorkSchema>;
