import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for extent element.
 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
 */
export const ExtentSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ExtentData = v.InferOutput<typeof ExtentSchema>;
