import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for fileChar element.
 * @see https://music-encoding.org/guidelines/v5/elements/fileChar.html
 */
export const FileCharSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type FileCharData = v.InferOutput<typeof FileCharSchema>;
