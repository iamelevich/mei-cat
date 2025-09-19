import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelPLikeSchema } from "../../shared/model/pLike";
import { AttrRegularMethodSchema } from "../attr/regularMethod";

/**
 * Base schema with attribute, to simplify types for NormalizationSchema
 */
const NormalizationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
	...AttrRegularMethodSchema.entries,
});

/**
 * Indicates the extent of normalization or regularization of the original source carried out in converting it to electronic form.
 * @see https://music-encoding.org/guidelines/v5/elements/normalization.html
 */
export const NormalizationSchema = v.lazy(() =>
	v.intersect([NormalizationBaseSchema, ModelHeadLikeSchema, ModelPLikeSchema]),
);

export type NormalizationData = v.InferOutput<typeof NormalizationSchema>;
