import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for unclear element.
 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
 */
export const UnclearSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type UnclearData = v.InferOutput<typeof UnclearSchema>;
