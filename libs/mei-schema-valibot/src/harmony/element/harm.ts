import * as v from "valibot";
import { AttrHarmAnlSchema } from "../../analytical/attr/harm.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrHarmGesSchema } from "../../gestural/attr/harm.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrHarmVisSchema } from "../../visual/attr/harm.vis";
import { AttrHarmLogSchema } from "../attr/harm.log";
import { ModelFigbassLikeSchema } from "../model/figbassLike";

/**
 * Base schema with attribute, to simplify types for HarmSchema
 */
const HarmBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHarmAnlSchema.entries,
	...AttrHarmGesSchema.entries,
	...AttrHarmLogSchema.entries,
	...AttrHarmVisSchema.entries,
});

/**
 * An indication of harmony, <abbr>e.g.</abbr>, chord names, tablature grids, harmonic analysis, figured bass.
 * @see https://music-encoding.org/guidelines/v5/elements/harm.html
 */
export const HarmSchema = v.lazy(() =>
	v.intersect([
		HarmBaseSchema,
		ModelEditLikeSchema,
		ModelFigbassLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type HarmData = v.InferOutput<typeof HarmSchema>;
