import * as v from "valibot";
import { AttrCpMarkAnlSchema } from "../../analytical/attr/cpMark.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCpMarkGesSchema } from "../../gestural/attr/cpMark.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { AttrCpMarkVisSchema } from "../../visual/attr/cpMark.vis";
import { AttrCpMarkLogSchema } from "../attr/cpMark.log";
import { ModelEditLikeSchema } from "../model/editLike";
import { ModelTranscriptionLikeSchema } from "../model/transcriptionLike";

/**
 * Base schema with attribute, to simplify types for CpMarkSchema
 */
const CpMarkBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCpMarkAnlSchema.entries,
	...AttrCpMarkGesSchema.entries,
	...AttrCpMarkLogSchema.entries,
	...AttrCpMarkVisSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * A verbal or graphical indication to copy musical material written elsewhere.
 * @see https://music-encoding.org/guidelines/v5/elements/cpMark.html
 */
export const CpMarkSchema = v.lazy(() =>
	v.intersect([
		CpMarkBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type CpMarkData = v.InferOutput<typeof CpMarkSchema>;
