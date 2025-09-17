import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for plateNum element.
 * @see https://music-encoding.org/guidelines/v5/elements/plateNum.html
 */
export const PlateNumSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PlateNumData = v.InferOutput<typeof PlateNumSchema>;
