import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrMetadataPointingSchema,
	ModelHeadLikeSchema,
	ModelMilestoneLikeTextSchema,
	ModelTextComponentLikeSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelFigureLikeSchema } from "../../figtable";
import { SpSchema } from "../../drama";

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
export const ArgumentSchema = v.intersect([
	ArgumentBaseSchema,
	v.object({
		/**
		 * Reference to element sp
		 * @see https://music-encoding.org/guidelines/v5/elements/sp.html
		 */
		sp: v.optional(
			v.union([v.lazy(() => SpSchema), v.array(v.lazy(() => SpSchema))]),
		),
	}),
	ModelFigureLikeSchema,
	ModelHeadLikeSchema,
	ModelMilestoneLikeTextSchema,
	ModelTextComponentLikeSchema,
]);

export type ArgumentData = v.InferOutput<typeof ArgumentSchema>;
