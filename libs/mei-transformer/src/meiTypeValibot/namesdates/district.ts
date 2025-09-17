import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for district element.
 * @see https://music-encoding.org/guidelines/v5/elements/district.html
 */
export const DistrictSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DistrictData = v.InferOutput<typeof DistrictSchema>;
