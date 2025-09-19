import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AnchoredTextSchema } from "../../usersymbols/element/anchoredText";
import { AttrCommonSchema } from "../attr/common";
import { AttrFormeworkSchema } from "../attr/formework";
import { AttrHorizontalAlignSchema } from "../attr/horizontalAlign";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextComponentLikeSchema } from "../model/textComponentLike";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for PgFootSchema
 */
const PgFootBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrFormeworkSchema.entries,
	...AttrHorizontalAlignSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * A running footer.
 * @see https://music-encoding.org/guidelines/v5/elements/pgFoot.html
 */
export const PgFootSchema = v.lazy(() =>
	v.intersect([
		PgFootBaseSchema,
		v.object({
			/**
			 * Reference to element anchoredText
			 * @see https://music-encoding.org/guidelines/v5/elements/anchoredText.html
			 */
			anchoredText: v.optional(
				v.union([AnchoredTextSchema, v.array(AnchoredTextSchema)]),
			),
		}),
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelTextComponentLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type PgFootData = v.InferOutput<typeof PgFootSchema>;
