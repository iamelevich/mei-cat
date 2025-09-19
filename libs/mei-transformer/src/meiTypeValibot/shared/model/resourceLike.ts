import * as v from "valibot";
import {
	type FacsimileData,
	FacsimileSchema,
} from "../../facsimile/element/facsimile";
import { type GenDescData, GenDescSchema } from "../../genetic/element/genDesc";
import {
	type PerformanceData,
	PerformanceSchema,
} from "../../performance/element/performance";

/**
 * Groups non-text components that represent the content of the musical text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.resourceLike.html
 */
export const ModelResourceLikeSchema: v.GenericSchema<ModelResourceLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Contains a representation of a written source in the form of a set of images rather than as transcribed or encoded text.
			 * @see https://music-encoding.org/guidelines/v5/elements/facsimile.html
			 */
			facsimile: v.optional(
				v.union([FacsimileSchema, v.array(FacsimileSchema)]),
			),
			/**
			 * Bundles information about the textual development of a work.
			 * @see https://music-encoding.org/guidelines/v5/elements/genDesc.html
			 */
			genDesc: v.optional(v.union([GenDescSchema, v.array(GenDescSchema)])),
			/**
			 * A presentation of one or more musical works.
			 * @see https://music-encoding.org/guidelines/v5/elements/performance.html
			 */
			performance: v.optional(
				v.union([PerformanceSchema, v.array(PerformanceSchema)]),
			),
		}),
	);

export type ModelResourceLikeData = {
	facsimile?: FacsimileData | FacsimileData[];
	genDesc?: GenDescData | GenDescData[];
	performance?: PerformanceData | PerformanceData[];
};
