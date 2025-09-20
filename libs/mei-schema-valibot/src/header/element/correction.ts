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
 * Base schema with attribute, to simplify types for CorrectionSchema
 */
const CorrectionBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
	...AttrRegularMethodSchema.entries,

	// Direct attributes
	/**
	 * Indicates the degree of correction applied to the text.
	 */
	"@corrlevel": v.optional(v.string()),
});

/**
 * States how and under what circumstances corrections have been made in the text.
 * @see https://music-encoding.org/guidelines/v5/elements/correction.html
 */
export const CorrectionSchema = v.lazy(() =>
	v.intersect([CorrectionBaseSchema, ModelHeadLikeSchema, ModelPLikeSchema]),
);

export type CorrectionData = v.InferOutput<typeof CorrectionSchema>;
