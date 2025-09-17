import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Simplified schema for graphic element.
 * @see https://music-encoding.org/guidelines/v5/elements/graphic.html
 */
export const GraphicSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

export type GraphicData = v.InferOutput<typeof GraphicSchema>;
