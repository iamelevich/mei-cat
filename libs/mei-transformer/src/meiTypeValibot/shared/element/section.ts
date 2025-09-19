import * as v from "valibot";
import { AttrSectionAnlSchema } from "../../analytical/attr/section.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrSectionGesSchema } from "../../gestural/attr/section.ges";
import { ModelDivLikeSchema } from "../../text/model/divLike";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrSectionVisSchema } from "../../visual/attr/section.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrPointingSchema } from "../attr/pointing";
import { AttrSectionLogSchema } from "../attr/section.log";
import { AttrTargetEvalSchema } from "../attr/targetEval";
import { ExpansionSchema } from "../element/expansion";
import { ModelAnnotLikeSchema } from "../model/annotLike";
import { ModelMilestoneLikeMusicSchema } from "../model/milestoneLike.music";
import { ModelRelationLikeSchema } from "../model/relationLike";
import { ModelSectionPartSchema } from "../model/sectionPart";

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
export const SectionSchema = v.lazy(() =>
	v.intersect([
		SectionBaseSchema,
		v.object({
			/**
			 * Reference to element expansion
			 * @see https://music-encoding.org/guidelines/v5/elements/expansion.html
			 */
			expansion: v.optional(
				v.union([ExpansionSchema, v.array(ExpansionSchema)]),
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
	]),
);

export type SectionData = v.InferOutput<typeof SectionSchema>;
