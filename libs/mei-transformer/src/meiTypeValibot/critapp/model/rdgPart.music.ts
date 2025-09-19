import * as v from "valibot";
import {
	type VoltaData,
	VoltaSchema,
	type ModelVerseLikeData,
	ModelVerseLikeSchema,
} from "../../lyrics";
import {
	type ModelControlEventLikeData,
	ModelControlEventLikeSchema,
	type ModelLayerLikeData,
	ModelLayerLikeSchema,
} from "../../shared";
import {
	type ModelControlEventLikeCmnData,
	ModelControlEventLikeCmnSchema,
} from "../../cmn";

/**
 * Groups elements that may appear as part of a musical variant.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rdgPart.music.html
 */
export const ModelRdgPartMusicSchema: v.GenericSchema<ModelRdgPartMusicData> =
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

export type ModelRdgPartMusicData = {
	volta?: VoltaData | VoltaData[];
} & ModelControlEventLikeData &
	ModelControlEventLikeCmnData &
	ModelLayerLikeData &
	ModelVerseLikeData;
