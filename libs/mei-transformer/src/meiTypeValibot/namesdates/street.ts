import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for street element.
 * @see https://music-encoding.org/guidelines/v5/elements/street.html
 */
export const StreetSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type StreetData = v.InferOutput<typeof StreetSchema>;
