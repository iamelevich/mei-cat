import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for watermark element.
 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
 */
export const WatermarkSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type WatermarkData = v.InferOutput<typeof WatermarkSchema>;
