import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrStageDirAnlSchema } from "../../analytical";
import { AttrStageDirGesSchema } from "../../gestural";
import { AttrStageDirLogSchema } from "..";
import { AttrStageDirVisSchema } from "../../visual";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for StageDirSchema
 */
const StageDirBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrStageDirAnlSchema.entries,
	...AttrStageDirGesSchema.entries,
	...AttrStageDirLogSchema.entries,
	...AttrStageDirVisSchema.entries,
});

/**
 * Contains any kind of stage direction within a dramatic text or fragment.
 * @see https://music-encoding.org/guidelines/v5/elements/stageDir.html
 */
export const StageDirSchema = v.intersect([
	StageDirBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type StageDirData = v.InferOutput<typeof StageDirSchema>;
