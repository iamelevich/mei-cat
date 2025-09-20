import * as v from "valibot";
import { AttrRepeatMarkAnlSchema } from "../../analytical/attr/repeatMark.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrRepeatMarkGesSchema } from "../../gestural/attr/repeatMark.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrRepeatMarkLogSchema } from "../../shared/attr/repeatMark.log";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrRepeatMarkVisSchema } from "../../visual/attr/repeatMark.vis";

/**
 * Base schema with attribute, to simplify types for RepeatMarkSchema
 */
const RepeatMarkBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrRepeatMarkAnlSchema.entries,
	...AttrRepeatMarkGesSchema.entries,
	...AttrRepeatMarkLogSchema.entries,
	...AttrRepeatMarkVisSchema.entries,
});

/**
 * An instruction expressed as a combination of text and symbols – segno and coda – typically above, below, or between staves, but not on the staff.
 * @see https://music-encoding.org/guidelines/v5/elements/repeatMark.html
 */
export const RepeatMarkSchema = v.lazy(() =>
	v.intersect([
		RepeatMarkBaseSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type RepeatMarkData = v.InferOutput<typeof RepeatMarkSchema>;
