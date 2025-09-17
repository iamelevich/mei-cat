import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for perfDuration element.
 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
 */
export const PerfDurationSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PerfDurationData = v.InferOutput<typeof PerfDurationSchema>;
