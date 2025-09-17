import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for num element.
 * @see https://music-encoding.org/guidelines/v5/elements/num.html
 */
export const NumSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type NumData = v.InferOutput<typeof NumSchema>;
