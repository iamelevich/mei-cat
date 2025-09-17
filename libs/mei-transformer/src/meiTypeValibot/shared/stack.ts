import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for stack element.
 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
 */
export const StackSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type StackData = v.InferOutput<typeof StackSchema>;
