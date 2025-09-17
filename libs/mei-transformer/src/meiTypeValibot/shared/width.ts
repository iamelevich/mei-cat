import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for width element.
 * @see https://music-encoding.org/guidelines/v5/elements/width.html
 */
export const WidthSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type WidthData = v.InferOutput<typeof WidthSchema>;
