import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for date element.
 * @see https://music-encoding.org/guidelines/v5/elements/date.html
 */
export const DateSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DateData = v.InferOutput<typeof DateSchema>;
