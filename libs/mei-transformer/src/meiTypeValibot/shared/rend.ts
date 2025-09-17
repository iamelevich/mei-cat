import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for rend element.
 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
 */
export const RendSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type RendData = v.InferOutput<typeof RendSchema>;
