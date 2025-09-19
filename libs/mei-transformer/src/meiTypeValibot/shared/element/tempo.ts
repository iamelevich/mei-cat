import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrTempoLogSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrTempoAnlSchema } from "../../analytical";
import { AttrTempoGesSchema } from "../../gestural";
import { AttrTempoVisSchema } from "../../visual";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";

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
export const TempoSchema = v.intersect([
	TempoBaseSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type TempoData = v.InferOutput<typeof TempoSchema>;
