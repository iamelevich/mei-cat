import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for dedication element.
 * @see https://music-encoding.org/guidelines/v5/elements/dedication.html
 */
export const DedicationSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DedicationData = v.InferOutput<typeof DedicationSchema>;
