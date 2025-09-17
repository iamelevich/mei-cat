import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for byline element.
 * @see https://music-encoding.org/guidelines/v5/elements/byline.html
 */
export const BylineSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type BylineData = v.InferOutput<typeof BylineSchema>;
