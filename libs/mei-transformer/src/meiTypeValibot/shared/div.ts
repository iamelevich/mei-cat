import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for div element.
 * @see https://music-encoding.org/guidelines/v5/elements/div.html
 */
export const DivSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DivData = v.InferOutput<typeof DivSchema>;
