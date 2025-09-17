import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for sourceDesc element.
 * @see https://music-encoding.org/guidelines/v5/elements/sourceDesc.html
 */
export const SourceDescSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SourceDescData = v.InferOutput<typeof SourceDescSchema>;
