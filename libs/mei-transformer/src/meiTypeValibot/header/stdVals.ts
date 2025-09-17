import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for stdVals element.
 * @see https://music-encoding.org/guidelines/v5/elements/stdVals.html
 */
export const StdValsSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type StdValsData = v.InferOutput<typeof StdValsSchema>;
