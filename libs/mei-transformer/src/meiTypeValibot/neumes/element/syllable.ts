import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	ModelAnnotLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelScoreDefLikeSchema,
	ModelStaffDefLikeSchema,
	ModelStaffGrpLikeSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSyllableAnlSchema } from "../../analytical";
import { AttrSyllableGesSchema } from "../../gestural";
import {
	AttrSyllableLogSchema,
	ModelNeumeModifierLikeSchema,
	ModelSyllablePartSchema,
} from "..";
import { AttrSyllableVisSchema } from "../../visual";
import { ModelAppLikeSchema } from "../../critapp";
import { ModelDivLikeSchema } from "../../text";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";

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
