import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for useRestrict element.
 * @see https://music-encoding.org/guidelines/v5/elements/useRestrict.html
 */
export const UseRestrictSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type UseRestrictData = v.InferOutput<typeof UseRestrictSchema>;
