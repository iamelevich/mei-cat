import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for biblScope element.
 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
 */
export const BiblScopeSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type BiblScopeData = v.InferOutput<typeof BiblScopeSchema>;
