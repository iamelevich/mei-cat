import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for country element.
 * @see https://music-encoding.org/guidelines/v5/elements/country.html
 */
export const CountrySchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type CountryData = v.InferOutput<typeof CountrySchema>;
