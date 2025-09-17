import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for category element.
 * @see https://music-encoding.org/guidelines/v5/elements/category.html
 */
export const CategorySchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type CategoryData = v.InferOutput<typeof CategorySchema>;
