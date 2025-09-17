import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Simplified schema for th element.
 * @see https://music-encoding.org/guidelines/v5/elements/th.html
 */
export const ThSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

export type ThData = v.InferOutput<typeof ThSchema>;
