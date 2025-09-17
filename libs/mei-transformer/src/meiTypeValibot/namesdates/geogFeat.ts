import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for geogFeat element.
 * @see https://music-encoding.org/guidelines/v5/elements/geogFeat.html
 */
export const GeogFeatSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type GeogFeatData = v.InferOutput<typeof GeogFeatSchema>;
