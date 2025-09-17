import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for dimensions element.
 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
 */
export const DimensionsSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DimensionsData = v.InferOutput<typeof DimensionsSchema>;
