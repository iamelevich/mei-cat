import * as v from "valibot";
import { AttrAttaccaAnlSchema } from "../../analytical/attr/attacca.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrAttaccaGesSchema } from "../../gestural/attr/attacca.ges";
import { AttrAttaccaLogSchema } from "../../shared/attr/attacca.log";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrAttaccaVisSchema } from "../../visual/attr/attacca.vis";

/**
 * Base schema with attribute, to simplify types for AttaccaSchema
 */
const AttaccaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAttaccaAnlSchema.entries,
	...AttrAttaccaGesSchema.entries,
	...AttrAttaccaLogSchema.entries,
	...AttrAttaccaVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * An instruction to begin the next section or movement of a composition without pause.
 * @see https://music-encoding.org/guidelines/v5/elements/attacca.html
 */
export const AttaccaSchema = v.lazy(() =>
	v.intersect([
		AttaccaBaseSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type AttaccaData = v.InferOutput<typeof AttaccaSchema>;
