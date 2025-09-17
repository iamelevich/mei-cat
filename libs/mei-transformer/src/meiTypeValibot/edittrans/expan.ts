import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for expan element.
 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
 */
export const ExpanSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ExpanData = v.InferOutput<typeof ExpanSchema>;
