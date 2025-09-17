import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for langUsage element.
 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
 */
export const LangUsageSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type LangUsageData = v.InferOutput<typeof LangUsageSchema>;
