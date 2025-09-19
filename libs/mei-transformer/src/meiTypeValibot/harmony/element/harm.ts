import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrHarmAnlSchema } from "../../analytical";
import { AttrHarmGesSchema } from "../../gestural";
import { AttrHarmLogSchema, ModelFigbassLikeSchema } from "..";
import { AttrHarmVisSchema } from "../../visual";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";

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
export const HarmSchema = v.intersect([
	HarmBaseSchema,
	ModelEditLikeSchema,
	ModelFigbassLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type HarmData = v.InferOutput<typeof HarmSchema>;
