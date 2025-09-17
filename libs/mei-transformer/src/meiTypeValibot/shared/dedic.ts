import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for dedic element.
 * @see https://music-encoding.org/guidelines/v5/elements/dedic.html
 */
export const DedicSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DedicData = v.InferOutput<typeof DedicSchema>;
