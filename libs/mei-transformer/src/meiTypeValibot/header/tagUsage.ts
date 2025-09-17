import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for tagUsage element.
 * @see https://music-encoding.org/guidelines/v5/elements/tagUsage.html
 */
export const TagUsageSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type TagUsageData = v.InferOutput<typeof TagUsageSchema>;
