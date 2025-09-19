import * as v from "valibot";
import { StandardTagSchema } from "../../common";
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
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSectionAnlSchema } from "../../analytical";
import { AttrSectionGesSchema } from "../../gestural";
import { AttrSectionVisSchema } from "../../visual";
import { ExpansionSchema } from ".";
import { ModelAppLikeSchema } from "../../critapp";
import { ModelDivLikeSchema } from "../../text";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";

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
