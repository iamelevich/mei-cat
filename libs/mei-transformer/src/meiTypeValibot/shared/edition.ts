import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for edition element.
 * @see https://music-encoding.org/guidelines/v5/elements/edition.html
 */
export const EditionSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type EditionData = v.InferOutput<typeof EditionSchema>;
