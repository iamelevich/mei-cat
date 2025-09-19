import * as v from "valibot";
import { AttrSectionAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSectionGesSchema } from "../../gestural";
import { ModelDivLikeSchema } from "../../text";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrSectionVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrMetadataPointingSchema,
	AttrPointingSchema,
	AttrSectionLogSchema,
	AttrTargetEvalSchema,
	ModelAnnotLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelRelationLikeSchema,
	ModelSectionPartSchema,
} from "..";
import { ExpansionSchema } from ".";

/**
 * Base schema with attribute, to simplify types for SectionSchema
 */
const SectionBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrSectionAnlSchema.entries,
	...AttrSectionGesSchema.entries,
	...AttrSectionLogSchema.entries,
	...AttrSectionVisSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Segment of music data.
 * @see https://music-encoding.org/guidelines/v5/elements/section.html
 */
export const SectionSchema = v.intersect([
	SectionBaseSchema,
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
	ModelDivLikeSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelRelationLikeSchema,
	ModelSectionPartSchema,
	ModelTranscriptionLikeSchema,
]);

export type SectionData = v.InferOutput<typeof SectionSchema>;
