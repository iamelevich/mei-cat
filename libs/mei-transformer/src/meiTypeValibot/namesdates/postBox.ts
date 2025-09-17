import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for postBox element.
 * @see https://music-encoding.org/guidelines/v5/elements/postBox.html
 */
export const PostBoxSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PostBoxData = v.InferOutput<typeof PostBoxSchema>;
