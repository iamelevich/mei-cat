import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrInternetMediaSchema } from "../../shared/attr/internetMedia";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelPLikeSchema } from "../../shared/model/pLike";
import { ModelLgLikeSchema } from "../../text/model/lgLike";

/**
 * Base schema with attribute, to simplify types for IncipTextSchema
 */
const IncipTextBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrInternetMediaSchema.entries,
	...AttrLangSchema.entries,
	...AttrPointingSchema.entries,
});

/**
 * Opening words of a musical composition.
 * @see https://music-encoding.org/guidelines/v5/elements/incipText.html
 */
export const IncipTextSchema = v.lazy(() =>
	v.intersect([
		IncipTextBaseSchema,
		ModelHeadLikeSchema,
		ModelLgLikeSchema,
		ModelPLikeSchema,
	]),
);

export type IncipTextData = v.InferOutput<typeof IncipTextSchema>;
