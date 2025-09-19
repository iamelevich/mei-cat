import * as v from "valibot";
import { AttrTempoAnlSchema } from "../../analytical/attr/tempo.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrTempoGesSchema } from "../../gestural/attr/tempo.ges";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrTempoVisSchema } from "../../visual/attr/tempo.vis";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrTempoLogSchema } from "../attr/tempo.log";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for TempoSchema
 */
const TempoBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTempoAnlSchema.entries,
	...AttrTempoGesSchema.entries,
	...AttrTempoLogSchema.entries,
	...AttrTempoVisSchema.entries,
});

/**
 * Text and symbols descriptive of tempo, mood, or style, <abbr>e.g.</abbr>, "allarg.", "a tempo", "cantabile", "Moderato", "♩=60", "Moderato ♩ =60").
 * @see https://music-encoding.org/guidelines/v5/elements/tempo.html
 */
export const TempoSchema = v.lazy(() =>
	v.intersect([
		TempoBaseSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type TempoData = v.InferOutput<typeof TempoSchema>;
