import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelAnnotLikeSchema,
	ModelMilestoneLikeTextSchema,
	ModelPLikeSchema,
	SpeakerSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSpAnlSchema } from "../../analytical";
import { AttrSpGesSchema } from "../../gestural";
import { AttrSpLogSchema, ModelStageDirLikeSchema } from "..";
import { AttrSpVisSchema } from "../../visual";
import {
	ListSchema,
	ModelLgLikeSchema,
	ModelLLikeSchema,
	ModelQuoteLikeSchema,
} from "../../text";
import { ModelAppLikeSchema } from "../../critapp";
import { ModelFigureLikeSchema } from "../../figtable";

/**
 * Base schema with attribute, to simplify types for SpSchema
 */
const SpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrSpAnlSchema.entries,
	...AttrSpGesSchema.entries,
	...AttrSpLogSchema.entries,
	...AttrSpVisSchema.entries,
});

/**
 * Contains an individual speech in a performance text.
 * @see https://music-encoding.org/guidelines/v5/elements/sp.html
 */
export const SpSchema = v.intersect([
	SpBaseSchema,
	v.object({
		/**
		 * Reference to element list
		 * @see https://music-encoding.org/guidelines/v5/elements/list.html
		 */
		list: v.union([
			v.lazy(() => ListSchema),
			v.array(v.lazy(() => ListSchema)),
		]),
		/**
		 * Reference to element speaker
		 * @see https://music-encoding.org/guidelines/v5/elements/speaker.html
		 */
		speaker: v.optional(
			v.union([
				v.lazy(() => SpeakerSchema),
				v.array(v.lazy(() => SpeakerSchema)),
			]),
		),
	}),
	ModelAnnotLikeSchema,
	ModelAppLikeSchema,
	ModelFigureLikeSchema,
	ModelLgLikeSchema,
	ModelLLikeSchema,
	ModelMilestoneLikeTextSchema,
	ModelPLikeSchema,
	ModelQuoteLikeSchema,
	ModelStageDirLikeSchema,
]);

export type SpData = v.InferOutput<typeof SpSchema>;
