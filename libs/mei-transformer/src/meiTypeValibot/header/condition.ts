import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for condition element.
 * @see https://music-encoding.org/guidelines/v5/elements/condition.html
 */
export const ConditionSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ConditionData = v.InferOutput<typeof ConditionSchema>;
