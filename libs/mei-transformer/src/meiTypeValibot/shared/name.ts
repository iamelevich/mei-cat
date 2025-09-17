import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for name element.
 * @see https://music-encoding.org/guidelines/v5/elements/name.html
 */
export const NameSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type NameData = v.InferOutput<typeof NameSchema>;
