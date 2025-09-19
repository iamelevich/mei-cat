import * as v from "valibot";
import { AttrGraceGrpAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrGraceGrpGesSchema } from "../../gestural";
import { AttrCommonSchema, ModelEventLikeSchema } from "../../shared";
import { AttrGraceGrpVisSchema } from "../../visual";
import { AttrGraceGrpLogSchema, ModelEventLikeCmnSchema } from "..";

/**
 * Base schema with attribute, to simplify types for GraceGrpSchema
 */
const GraceGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrGraceGrpAnlSchema.entries,
	...AttrGraceGrpGesSchema.entries,
	...AttrGraceGrpLogSchema.entries,
	...AttrGraceGrpVisSchema.entries,
});

/**
 * A container for a sequence of grace notes.
 * @see https://music-encoding.org/guidelines/v5/elements/graceGrp.html
 */
export const GraceGrpSchema = v.intersect([
	GraceGrpBaseSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelEventLikeSchema,
	ModelEventLikeCmnSchema,
	ModelTranscriptionLikeSchema,
]);

export type GraceGrpData = v.InferOutput<typeof GraceGrpSchema>;
