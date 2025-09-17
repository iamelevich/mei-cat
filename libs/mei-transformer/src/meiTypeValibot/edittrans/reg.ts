import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for reg element.
 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
 */
export const RegSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type RegData = v.InferOutput<typeof RegSchema>;
