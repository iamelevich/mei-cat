import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for contentItem element.
 * @see https://music-encoding.org/guidelines/v5/elements/contentItem.html
 */
export const ContentItemSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ContentItemData = v.InferOutput<typeof ContentItemSchema>;
