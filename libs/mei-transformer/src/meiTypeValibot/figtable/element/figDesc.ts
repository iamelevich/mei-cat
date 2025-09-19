import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelTextComponentLikeSchema } from "../../shared/model/textComponentLike";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for FigDescSchema
 */
const FigDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a brief prose description of the appearance or content of a graphic figure, for use when documenting an image without displaying it.
 * @see https://music-encoding.org/guidelines/v5/elements/figDesc.html
 */
export const FigDescSchema = v.lazy(() =>
	v.intersect([
		FigDescBaseSchema,
		ModelTextComponentLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type FigDescData = v.InferOutput<typeof FigDescSchema>;
