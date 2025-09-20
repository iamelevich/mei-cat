import * as v from "valibot";
import { AttrStageDirAnlSchema } from "../../analytical/attr/stageDir.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrStageDirGesSchema } from "../../gestural/attr/stageDir.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { AttrStageDirVisSchema } from "../../visual/attr/stageDir.vis";
import { AttrStageDirLogSchema } from "../attr/stageDir.log";

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
export const StageDirSchema = v.lazy(() =>
	v.intersect([
		StageDirBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type StageDirData = v.InferOutput<typeof StageDirSchema>;
