import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for annot element.
 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
 */
export const AnnotSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type AnnotData = v.InferOutput<typeof AnnotSchema>;
