import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AnchoredTextSchema } from "../../usersymbols";
import {
	AttrCommonSchema,
	AttrFormeworkSchema,
	AttrHorizontalAlignSchema,
	AttrLangSchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for PgHeadSchema
 */
const PgHeadBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrFormeworkSchema.entries,
	...AttrHorizontalAlignSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * A running header.
 * @see https://music-encoding.org/guidelines/v5/elements/pgHead.html
 */
export const PgHeadSchema = v.intersect([
	PgHeadBaseSchema,
	v.object({
		/**
		 * Reference to element anchoredText
		 * @see https://music-encoding.org/guidelines/v5/elements/anchoredText.html
		 */
		anchoredText: v.optional(
			v.union([
				v.lazy(() => AnchoredTextSchema),
				v.array(v.lazy(() => AnchoredTextSchema)),
			]),
		),
	}),
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type PgHeadData = v.InferOutput<typeof PgHeadSchema>;
