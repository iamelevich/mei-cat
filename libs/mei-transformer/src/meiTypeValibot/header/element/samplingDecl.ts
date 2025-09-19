import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelPLikeSchema } from "../../shared/model/pLike";

/**
 * Base schema with attribute, to simplify types for SamplingDeclSchema
 */
const SamplingDeclBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a prose description of the rationale and methods used in sampling texts in the creation of a corpus or collection.
 * @see https://music-encoding.org/guidelines/v5/elements/samplingDecl.html
 */
export const SamplingDeclSchema = v.lazy(() =>
	v.intersect([SamplingDeclBaseSchema, ModelHeadLikeSchema, ModelPLikeSchema]),
);

export type SamplingDeclData = v.InferOutput<typeof SamplingDeclSchema>;
