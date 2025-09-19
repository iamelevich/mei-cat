import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelEventLikeSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrGraceGrpAnlSchema } from "../../analytical";
import { AttrGraceGrpGesSchema } from "../../gestural";
import { AttrGraceGrpLogSchema, ModelEventLikeCmnSchema } from "..";
import { AttrGraceGrpVisSchema } from "../../visual";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

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
