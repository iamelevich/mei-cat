import * as v from "valibot";
import { AttrDynamAnlSchema } from "../../analytical/attr/dynam.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrDynamGesSchema } from "../../gestural/attr/dynam.ges";
import { AttrDynamVisSchema } from "../../visual/attr/dynam.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrDynamLogSchema } from "../attr/dynam.log";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for DynamSchema
 */
const DynamBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDynamAnlSchema.entries,
	...AttrDynamGesSchema.entries,
	...AttrDynamLogSchema.entries,
	...AttrDynamVisSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Indication of the volume of a note, phrase, or section of music.
 * @see https://music-encoding.org/guidelines/v5/elements/dynam.html
 */
export const DynamSchema = v.lazy(() =>
	v.intersect([
		DynamBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type DynamData = v.InferOutput<typeof DynamSchema>;
