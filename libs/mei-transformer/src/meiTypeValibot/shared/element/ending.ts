import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrEndingLogSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	ModelAnnotLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelRelationLikeSchema,
	ModelScoreDefLikeSchema,
	ModelSectionLikeSchema,
	ModelSectionPartMensuralAndNeumesSchema,
	ModelStaffDefLikeSchema,
} from "..";
import { AttrEndingAnlSchema } from "../../analytical";
import { AttrEndingGesSchema } from "../../gestural";
import { AttrEndingVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";
import { ExpansionSchema } from ".";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { ModelSectionPartCmnSchema } from "../../cmn";

/**
 * Base schema with attribute, to simplify types for EndingSchema
 */
const EndingBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEndingAnlSchema.entries,
	...AttrEndingGesSchema.entries,
	...AttrEndingLogSchema.entries,
	...AttrEndingVisSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Alternative ending for a repeated passage of music; <abbr>i.e.</abbr>, prima volta, seconda volta, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/ending.html
 */
export const EndingSchema = v.intersect([
	EndingBaseSchema,
	v.object({
		/**
		 * Reference to element expansion
		 * @see https://music-encoding.org/guidelines/v5/elements/expansion.html
		 */
		expansion: v.optional(
			v.union([
				v.lazy(() => ExpansionSchema),
				v.array(v.lazy(() => ExpansionSchema)),
			]),
		),
	}),
	ModelAnnotLikeSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelRelationLikeSchema,
	ModelScoreDefLikeSchema,
	ModelSectionLikeSchema,
	ModelSectionPartCmnSchema,
	ModelSectionPartMensuralAndNeumesSchema,
	ModelStaffDefLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type EndingData = v.InferOutput<typeof EndingSchema>;
