import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for funder element.
 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
 */
export const FunderSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type FunderData = v.InferOutput<typeof FunderSchema>;
