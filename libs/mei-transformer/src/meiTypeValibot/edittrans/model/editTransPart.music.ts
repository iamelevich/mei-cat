import * as v from "valibot";
import {
	type ModelControlEventLikeCmnData,
	ModelControlEventLikeCmnSchema,
} from "../../cmn/model/controlEventLike.cmn";
import { type VoltaData, VoltaSchema } from "../../lyrics/element/volta";
import {
	type ModelVerseLikeData,
	ModelVerseLikeSchema,
} from "../../lyrics/model/verseLike";
import {
	type ModelControlEventLikeData,
	ModelControlEventLikeSchema,
} from "../../shared/model/controlEventLike";
import {
	type ModelLayerLikeData,
	ModelLayerLikeSchema,
} from "../../shared/model/layerLike";

/**
 * Groups elements that may appear as part of editorial and transcription elements in music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editTransPart.music.html
 */
export const ModelEditTransPartMusicSchema: v.GenericSchema<ModelEditTransPartMusicData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * Sung text for a specific iteration of a repeated section of music.
				 * @see https://music-encoding.org/guidelines/v5/elements/volta.html
				 */
				volta: v.optional(v.union([VoltaSchema, v.array(VoltaSchema)])),
			}),
			ModelControlEventLikeSchema,
			ModelControlEventLikeCmnSchema,
			ModelLayerLikeSchema,
			ModelVerseLikeSchema,
		]),
	);

export type ModelEditTransPartMusicData = {
	volta?: VoltaData | VoltaData[];
} & ModelControlEventLikeData &
	ModelControlEventLikeCmnData &
	ModelLayerLikeData &
	ModelVerseLikeData;
