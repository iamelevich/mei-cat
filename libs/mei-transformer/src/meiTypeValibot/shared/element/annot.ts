import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAnnotAnlSchema } from "../../analytical";
import { AttrAnnotGesSchema } from "../../gestural";
import {
	AttrAnnotLogSchema,
	AttrAudienceSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	AttrPlistSchema,
	AttrSourceSchema,
	AttrTargetEvalSchema,
	ModelHeadLikeSchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeSchema,
} from "..";
import { AttrAnnotVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for AnnotSchema
 */
const AnnotBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAnnotAnlSchema.entries,
	...AttrAnnotGesSchema.entries,
	...AttrAnnotLogSchema.entries,
	...AttrAnnotVisSchema.entries,
	...AttrAudienceSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrPlistSchema.entries,
	...AttrSourceSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Provides a statement explaining the text or indicating the basis for an assertion.
 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
 */
export const AnnotSchema = v.intersect([
	AnnotBaseSchema,
	ModelEditLikeSchema,
	ModelHeadLikeSchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type AnnotData = v.InferOutput<typeof AnnotSchema>;
