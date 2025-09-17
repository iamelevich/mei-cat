import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for source element.
 * @see https://music-encoding.org/guidelines/v5/elements/source.html
 */
export const SourceSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SourceData = v.InferOutput<typeof SourceSchema>;
