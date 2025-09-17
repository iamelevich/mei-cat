import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for region element.
 * @see https://music-encoding.org/guidelines/v5/elements/region.html
 */
export const RegionSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type RegionData = v.InferOutput<typeof RegionSchema>;
