import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for lg element.
 * @see https://music-encoding.org/guidelines/v5/elements/lg.html
 */
export const LgSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type LgData = v.InferOutput<typeof LgSchema>;
