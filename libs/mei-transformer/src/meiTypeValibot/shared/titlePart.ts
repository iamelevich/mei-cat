import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for titlePart element.
 * @see https://music-encoding.org/guidelines/v5/elements/titlePart.html
 */
export const TitlePartSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type TitlePartData = v.InferOutput<typeof TitlePartSchema>;
