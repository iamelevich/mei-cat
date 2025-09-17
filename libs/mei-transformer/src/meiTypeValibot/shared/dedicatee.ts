import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for dedicatee element.
 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
 */
export const DedicateeSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DedicateeData = v.InferOutput<typeof DedicateeSchema>;
