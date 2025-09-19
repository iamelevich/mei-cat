import * as v from "valibot";
import { AttrSyllableAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSyllableGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	ModelAnnotLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelScoreDefLikeSchema,
	ModelStaffDefLikeSchema,
	ModelStaffGrpLikeSchema,
} from "../../shared";
import { ModelDivLikeSchema } from "../../text";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrSyllableVisSchema } from "../../visual";
import {
	AttrSyllableLogSchema,
	ModelNeumeModifierLikeSchema,
	ModelSyllablePartSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for SyllableSchema
 */
const SyllableBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSyllableAnlSchema.entries,
	...AttrSyllableGesSchema.entries,
	...AttrSyllableLogSchema.entries,
	...AttrSyllableVisSchema.entries,
});

/**
 * Neume notation can be thought of as "neumed text". Therefore, the syllable element provides high-level organization in this repertoire.
 * @see https://music-encoding.org/guidelines/v5/elements/syllable.html
 */
export const SyllableSchema = v.intersect([
	SyllableBaseSchema,
	ModelAnnotLikeSchema,
	ModelAppLikeSchema,
	ModelDivLikeSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelNeumeModifierLikeSchema,
	ModelScoreDefLikeSchema,
	ModelStaffDefLikeSchema,
	ModelStaffGrpLikeSchema,
	ModelSyllablePartSchema,
	ModelTranscriptionLikeSchema,
]);

export type SyllableData = v.InferOutput<typeof SyllableSchema>;
