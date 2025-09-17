import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for context element.
 * @see https://music-encoding.org/guidelines/v5/elements/context.html
 */
export const ContextSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ContextData = v.InferOutput<typeof ContextSchema>;
