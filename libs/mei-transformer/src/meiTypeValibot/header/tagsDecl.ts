import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for tagsDecl element.
 * @see https://music-encoding.org/guidelines/v5/elements/tagsDecl.html
 */
export const TagsDeclSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type TagsDeclData = v.InferOutput<typeof TagsDeclSchema>;
