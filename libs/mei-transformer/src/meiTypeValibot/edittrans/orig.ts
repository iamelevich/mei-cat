import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for orig element.
 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
 */
export const OrigSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type OrigData = v.InferOutput<typeof OrigSchema>;
