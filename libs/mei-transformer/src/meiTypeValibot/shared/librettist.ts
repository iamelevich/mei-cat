import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for librettist element.
 * @see https://music-encoding.org/guidelines/v5/elements/librettist.html
 */
export const LibrettistSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type LibrettistData = v.InferOutput<typeof LibrettistSchema>;
