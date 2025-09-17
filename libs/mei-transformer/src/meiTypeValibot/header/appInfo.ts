import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for appInfo element.
 * @see https://music-encoding.org/guidelines/v5/elements/appInfo.html
 */
export const AppInfoSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type AppInfoData = v.InferOutput<typeof AppInfoSchema>;
