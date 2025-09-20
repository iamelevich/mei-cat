import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { SpSchema } from "../../drama/element/sp";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ModelFigureLikeSchema } from "../../figtable/model/figureLike";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelMilestoneLikeTextSchema } from "../../shared/model/milestoneLike.text";
import { ModelTextComponentLikeSchema } from "../../shared/model/textComponentLike";

/**
 * Base schema with attribute, to simplify types for ArgumentSchema
 */
const ArgumentBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Contains a formal list or prose description of topics addressed.
 * @see https://music-encoding.org/guidelines/v5/elements/argument.html
 */
export const ArgumentSchema = v.lazy(() =>
	v.intersect([
		ArgumentBaseSchema,
		v.object({
			/**
			 * Reference to element sp
			 * @see https://music-encoding.org/guidelines/v5/elements/sp.html
			 */
			sp: v.optional(v.union([v.array(SpSchema), SpSchema])),
		}),
		ModelFigureLikeSchema,
		ModelHeadLikeSchema,
		ModelMilestoneLikeTextSchema,
		ModelTextComponentLikeSchema,
	]),
);

export type ArgumentData = v.InferOutput<typeof ArgumentSchema>;
