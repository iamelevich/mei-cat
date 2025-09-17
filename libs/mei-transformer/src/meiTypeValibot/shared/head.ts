import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for head element.
 * @see https://music-encoding.org/guidelines/v5/elements/head.html
 */
export const HeadSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type HeadData = v.InferOutput<typeof HeadSchema>;
