import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for changeDesc element.
 * @see https://music-encoding.org/guidelines/v5/elements/changeDesc.html
 */
export const ChangeDescSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ChangeDescData = v.InferOutput<typeof ChangeDescSchema>;
