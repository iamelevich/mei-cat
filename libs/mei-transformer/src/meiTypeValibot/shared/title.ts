import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for title element.
 * @see https://music-encoding.org/guidelines/v5/elements/title.html
 */
export const TitleSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type TitleData = v.InferOutput<typeof TitleSchema>;
