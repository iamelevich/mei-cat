import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for lb element.
 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
 */
export const LbSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type LbData = v.InferOutput<typeof LbSchema>;
