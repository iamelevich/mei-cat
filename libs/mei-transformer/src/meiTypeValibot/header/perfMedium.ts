import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for perfMedium element.
 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
 */
export const PerfMediumSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PerfMediumData = v.InferOutput<typeof PerfMediumSchema>;
