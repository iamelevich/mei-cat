import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelPLikeSchema } from "../../shared/model/pLike";

/**
 * Base schema with attribute, to simplify types for StdValsSchema
 */
const StdValsBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Specifies the format used when standardized date or number values are supplied.
 * @see https://music-encoding.org/guidelines/v5/elements/stdVals.html
 */
export const StdValsSchema = v.lazy(() =>
	v.intersect([StdValsBaseSchema, ModelHeadLikeSchema, ModelPLikeSchema]),
);

export type StdValsData = v.InferOutput<typeof StdValsSchema>;
