import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Simplified schema for figDesc element.
 * @see https://music-encoding.org/guidelines/v5/elements/figDesc.html
 */
export const FigDescSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

export type FigDescData = v.InferOutput<typeof FigDescSchema>;
