import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for samplingDecl element.
 * @see https://music-encoding.org/guidelines/v5/elements/samplingDecl.html
 */
export const SamplingDeclSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SamplingDeclData = v.InferOutput<typeof SamplingDeclSchema>;
