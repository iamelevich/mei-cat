import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelTextComponentLikeSchema } from "../../shared/model/textComponentLike";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for DedicationSchema
 */
const DedicationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a dedicatory statement.
 * @see https://music-encoding.org/guidelines/v5/elements/dedication.html
 */
export const DedicationSchema = v.lazy(() =>
	v.intersect([
		DedicationBaseSchema,
		ModelHeadLikeSchema,
		ModelTextComponentLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type DedicationData = v.InferOutput<typeof DedicationSchema>;
