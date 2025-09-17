import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for label element.
 * @see https://music-encoding.org/guidelines/v5/elements/label.html
 */
export const LabelSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type LabelData = v.InferOutput<typeof LabelSchema>;
