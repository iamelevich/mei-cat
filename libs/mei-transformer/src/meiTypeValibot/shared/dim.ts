import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for dim element.
 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
 */
export const DimSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DimData = v.InferOutput<typeof DimSchema>;
