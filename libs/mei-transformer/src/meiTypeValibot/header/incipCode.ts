import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for incipCode element.
 * @see https://music-encoding.org/guidelines/v5/elements/incipCode.html
 */
export const IncipCodeSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type IncipCodeData = v.InferOutput<typeof IncipCodeSchema>;
