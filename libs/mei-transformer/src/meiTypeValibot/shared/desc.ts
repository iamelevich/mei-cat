import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for desc element.
 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
 */
export const DescSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DescData = v.InferOutput<typeof DescSchema>;
