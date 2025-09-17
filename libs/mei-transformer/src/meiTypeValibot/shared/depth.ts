import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for depth element.
 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
 */
export const DepthSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DepthData = v.InferOutput<typeof DepthSchema>;
