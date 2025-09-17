import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for patch element.
 * @see https://music-encoding.org/guidelines/v5/elements/patch.html
 */
export const PatchSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PatchData = v.InferOutput<typeof PatchSchema>;
