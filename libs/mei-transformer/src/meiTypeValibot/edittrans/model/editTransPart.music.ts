import * as v from "valibot";
import {
	type ModelControlEventLikeCmnData,
	ModelControlEventLikeCmnSchema,
} from "../../cmn";
import {
	type ModelVerseLikeData,
	ModelVerseLikeSchema,
	type VoltaData,
	VoltaSchema,
} from "../../lyrics";
import {
	type ModelControlEventLikeData,
	ModelControlEventLikeSchema,
	type ModelLayerLikeData,
	ModelLayerLikeSchema,
} from "../../shared";

/**
 * Groups elements that may appear as part of editorial and transcription elements in music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editTransPart.music.html
 */
export const ModelEditTransPartMusicSchema: v.GenericSchema<ModelEditTransPartMusicData> =
	v.intersect([
		v.object({
			/**
			 * Sung text for a specific iteration of a repeated section of music.
			 * @see https://music-encoding.org/guidelines/v5/elements/volta.html
			 */
			volta: v.optional(
				v.union([
					v.lazy(() => VoltaSchema),
					v.array(v.lazy(() => VoltaSchema)),
				]),
			),
		}),
		ModelControlEventLikeSchema,
		ModelControlEventLikeCmnSchema,
		ModelLayerLikeSchema,
		ModelVerseLikeSchema,
	]);

export type ModelEditTransPartMusicData = {
	volta?: VoltaData | VoltaData[];
} & ModelControlEventLikeData &
	ModelControlEventLikeCmnData &
	ModelLayerLikeData &
	ModelVerseLikeData;
