import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for corr element.
 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
 */
export const CorrSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type CorrData = v.InferOutput<typeof CorrSchema>;
