import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelPLikeSchema } from "../../shared/model/pLike";

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
export const SegmentationSchema = v.lazy(() =>
	v.intersect([SegmentationBaseSchema, ModelHeadLikeSchema, ModelPLikeSchema]),
);

export type SegmentationData = v.InferOutput<typeof SegmentationSchema>;
