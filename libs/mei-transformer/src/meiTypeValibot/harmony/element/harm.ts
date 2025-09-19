import * as v from "valibot";
import { AttrHarmAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrHarmGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrHarmVisSchema } from "../../visual";
import { AttrHarmLogSchema, ModelFigbassLikeSchema } from "..";

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
