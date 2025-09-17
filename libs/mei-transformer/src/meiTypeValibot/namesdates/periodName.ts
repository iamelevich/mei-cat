import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for periodName element.
 * @see https://music-encoding.org/guidelines/v5/elements/periodName.html
 */
export const PeriodNameSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PeriodNameData = v.InferOutput<typeof PeriodNameSchema>;
