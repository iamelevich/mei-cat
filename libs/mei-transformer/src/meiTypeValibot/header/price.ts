import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for price element.
 * @see https://music-encoding.org/guidelines/v5/elements/price.html
 */
export const PriceSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PriceData = v.InferOutput<typeof PriceSchema>;
