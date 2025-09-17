import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for attUsage element.
 * @see https://music-encoding.org/guidelines/v5/elements/attUsage.html
 */
export const AttUsageSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type AttUsageData = v.InferOutput<typeof AttUsageSchema>;
