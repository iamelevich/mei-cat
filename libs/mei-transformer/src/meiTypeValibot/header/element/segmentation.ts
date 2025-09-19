import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for SegmentationSchema
 */
const SegmentationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes the principles according to which the musical text has been segmented, for example into movements, sections, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/segmentation.html
 */
export const SegmentationSchema = v.intersect([
	SegmentationBaseSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
]);

export type SegmentationData = v.InferOutput<typeof SegmentationSchema>;
