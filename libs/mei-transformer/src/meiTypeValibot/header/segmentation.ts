import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for segmentation element.
 * @see https://music-encoding.org/guidelines/v5/elements/segmentation.html
 */
export const SegmentationSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SegmentationData = v.InferOutput<typeof SegmentationSchema>;
